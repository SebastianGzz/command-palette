import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CommandPaletteContext } from "./CommandPaletteContext";
import { ICommandPaletteData, TInputEvent } from "./types";
import { HomeIcon } from "@/assetss/icons";

interface Props {
  children: React.ReactNode;
}

export default function CommandPaletteProvider({ children }: Props) {
  const router = useRouter(); // Provitional

  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [commandPaletteSearch, setCommandPaletteSearch] = useState("");
  const [commandPaletteResults, setCommandPaletteResults] = useState<
    ICommandPaletteData[]
  >([]);
  const [commandPaletteIndex, setCommandPaletteIndex] = useState([0, 0]);

  // Obtener un array de arrays de opciones
  const [commandPalette, setCommandPalette] = useState<ICommandPaletteData[]>([
    {
      title: "General",
      options: [
        {
          id: 0,
          icon: <HomeIcon />,
          name: "Open Home",
          action: () => router.push("/"),
        },
        {
          id: 1,
          icon: <HomeIcon />,
          name: "Open About",
          action: () => router.push("/about"),
        },
      ],
    },
    {
      title: "Pages",
      options: [
        {
          id: 2,
          icon: <HomeIcon />,
          name: "Open Contact",
          action: () => router.push("/contact"),
        },
        {
          id: 3,
          icon: <HomeIcon />,
          name: "Open Blog",
          action: () => router.push("/blog"),
        },
        {
          id: 4,
          icon: <HomeIcon />,
          name: "Open Projects",
          action: () => router.push("/projects"),
        },
      ],
    },
    {
      title: "Theme",
      options: [
        {
          id: 5,
          icon: <HomeIcon />,
          name: "Open Settings",
          action: () => router.push("/settings"),
        },
        {
          id: 6,
          icon: <HomeIcon />,
          name: "Open Sign In",
          action: () => router.push("/sign-in"),
        },
        {
          id: 7,
          icon: <HomeIcon />,
          name: "Open Sign Up",
          action: () => router.push("/sign-up"),
        },
      ],
    },
  ]);

  const handleCommandPaletteSearch = (e: TInputEvent) => {
    setCommandPaletteIndex([0, 0]);
    setCommandPaletteSearch(e.target.value.toLocaleLowerCase());
  };

  const handleChooseOption = (categoryIndex: number, option: number) => {
    const coordinates = [categoryIndex, option];
    setCommandPaletteIndex(coordinates);
  };

  const handleExecuteAction = useCallback(() => {
    commandPaletteResults[commandPaletteIndex[0]].options[
      commandPaletteIndex[1]
    ].action();

    setCommandPaletteOpen(false);
  }, [commandPaletteIndex, commandPaletteResults]);

  // filter command palette options
  useEffect(() => {
    const results: ICommandPaletteData[] = [];

    commandPalette.forEach((category) => {
      const options = category.options.filter((option) => {
        return option.name.toLowerCase().includes(commandPaletteSearch);
      });

      if (options.length > 0) results.push({ ...category, options });
    });

    setCommandPaletteResults(results);
  }, [commandPaletteSearch, commandPalette]);

  // capture keyboard shortcuts
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setCommandPaletteSearch("");
        setCommandPaletteIndex([0, 0]);
        setCommandPaletteOpen((prev) => !prev);
      }

      if (e.key === "ArrowDown" && commandPaletteOpen) {
        e.preventDefault();

        const RESULTS_LENGTH = commandPaletteResults.length - 1;
        const OPTIONS_LIST_LENGHT =
          commandPaletteResults[commandPaletteIndex[0]].options.length - 1;

        let newI = commandPaletteIndex;

        newI[1] === OPTIONS_LIST_LENGHT
          ? (newI = newI[0] + 1 > RESULTS_LENGTH ? [0, 0] : [newI[0] + 1, 0])
          : (newI = [newI[0], newI[1] + 1]);

        setCommandPaletteIndex(newI);
      }

      if (e.key === "ArrowUp" && commandPaletteOpen) {
        e.preventDefault();

        if (commandPaletteIndex[1] === 0) {
          setCommandPaletteIndex((prev) => {
            // true: means that the index is found [0, 0] therefore we send the index to the [last list, last position]
            // false: it means that we are in the first position of the list so it is necessary to go to the [list above, last position]
            return prev[0] - 1 < 0
              ? [
                  commandPaletteResults.length - 1,
                  commandPaletteResults[commandPaletteResults.length - 1]
                    .options.length - 1,
                ]
              : [
                  prev[0] - 1,
                  commandPaletteResults[prev[0] - 1].options.length - 1,
                ];
          });
        }

        if (commandPaletteIndex[1] - 1 >= 0) {
          setCommandPaletteIndex((prev) => {
            return [prev[0], prev[1] - 1];
          });
        }
      }

      if (e.key === "Enter") handleExecuteAction();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    commandPaletteOpen,
    commandPaletteResults,
    commandPaletteIndex,
    handleExecuteAction,
  ]);

  return (
    <CommandPaletteContext.Provider
      value={{
        commandPalette,
        commandPaletteOpen,
        commandPaletteSearch,
        commandPaletteResults,
        commandPaletteIndex,
        handleCommandPaletteSearch,
        handleChooseOption,
        handleExecuteAction,
      }}
    >
      {children}
    </CommandPaletteContext.Provider>
  );
}
