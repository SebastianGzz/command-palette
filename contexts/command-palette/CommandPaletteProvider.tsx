import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CommandPaletteContext } from "./CommandPaletteContext";
import { ICommandPaletteOption, TInputEvent } from "./types";
import { HomeIcon } from "@/assetss/icons";

interface Props {
  children: React.ReactNode;
}

export default function CommandPaletteProvider({ children }: Props) {
  const router = useRouter(); // Provitional

  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [commandPaletteSearch, setCommandPaletteSearch] = useState("");
  const [commandPaletteResults, setCommandPaletteResults] = useState<
    ICommandPaletteOption[]
  >([]);
  const [commandPaletteIndex, setCommandPaletteIndex] = useState(0);
  const [commandPalette, setCommandPalette] = useState<ICommandPaletteOption[]>(
    [
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
    ]
  );

  const handleCommandPaletteSearch = (e: TInputEvent) => {
    setCommandPaletteIndex(0);
    setCommandPaletteSearch(e.target.value);
  };

  const handleChooseOption = (option: number) => {
    setCommandPaletteIndex(option);
  };

  const handleExecuteAction = useCallback(() => {
    commandPaletteResults[commandPaletteIndex].action();
    setCommandPaletteOpen(false);
  }, [commandPaletteResults, commandPaletteIndex]);

  // filter command palette options
  useEffect(() => {
    const results = commandPalette.filter((option) => {
      const name = option.name.toLowerCase();
      const search = commandPaletteSearch.toLocaleLowerCase();

      return name.includes(search);
    });

    setCommandPaletteResults(results);
  }, [commandPaletteSearch, commandPalette]);

  // capture keyboard shortcuts
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setCommandPaletteSearch("");
        setCommandPaletteIndex(0);
        setCommandPaletteOpen((prev) => !prev);
      }

      if (e.key === "ArrowDown" && commandPaletteOpen) {
        setCommandPaletteIndex((prev) => {
          return prev < commandPaletteResults.length - 1 ? prev + 1 : prev;
        });
      }

      if (e.key === "ArrowUp" && commandPaletteOpen) {
        setCommandPaletteIndex((prev) => {
          return prev > 0 ? prev - 1 : prev;
        });
      }

      if (e.key === "Enter") handleExecuteAction();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [commandPaletteOpen, commandPaletteResults, handleExecuteAction]);

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
