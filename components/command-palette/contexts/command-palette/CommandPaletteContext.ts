import { createContext } from "react";
import { ICommandPaletteData, TInputEvent } from "./types";

interface Props {
  commandPalette: ICommandPaletteData[];
  commandPaletteOpen: boolean;
  commandPaletteSearch: string;
  commandPaletteResults: ICommandPaletteData[];
  commandPaletteIndex: number[];
  handleCommandPaletteSearch: (e: TInputEvent) => void;
  handleChooseOption: (categoryIndex: number, option: number) => void;
  handleExecuteAction: () => void;
}

export const CommandPaletteContext = createContext({} as Props);
