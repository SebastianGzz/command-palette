import { createContext } from "react";
import { ICommandPaletteOption, TInputEvent } from "./types";

interface Props {
  commandPalette: ICommandPaletteOption[];
  commandPaletteOpen: boolean;
  commandPaletteSearch: string;
  commandPaletteResults: ICommandPaletteOption[];
  commandPaletteIndex: number;
  handleCommandPaletteSearch: (e: TInputEvent) => void;
  handleChooseOption: (option: number) => void;
  handleExecuteAction: () => void;
}

export const CommandPaletteContext = createContext({} as Props);
