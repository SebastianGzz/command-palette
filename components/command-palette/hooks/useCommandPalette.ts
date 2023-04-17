import { useContext } from "react";
import { CommandPaletteContext } from "../contexts/command-palette/CommandPaletteContext";

export const useCommandPalette = () => {
  const context = useContext(CommandPaletteContext);
  return context;
};
