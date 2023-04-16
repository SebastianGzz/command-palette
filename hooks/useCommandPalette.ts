import { CommandPaletteContext } from "@/contexts/command-palette/CommandPaletteContext";
import { useContext } from "react";

export const useCommandPalette = () => {
  const context = useContext(CommandPaletteContext);
  return context;
};
