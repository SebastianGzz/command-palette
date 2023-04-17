import { useCommandPalette } from "@/components/command-palette/hooks/useCommandPalette";
import CommandPaletteFinder from "./command-palette-finder";
import CommandPaletteOptions from "./command-palette-options";
import { createPortal } from "react-dom";

// RenderPortal is a component that renders the command palette in a portal
export const RenderPortal = (component: React.ReactNode) => {
  const commandPalette = useCommandPalette();
  const domElement =
    typeof document !== "undefined" && document.getElementById("modal");

  if (commandPalette.commandPaletteOpen && domElement) {
    return createPortal(component, domElement);
  }

  return null;
};

export default function CommandPalette() {
  return RenderPortal(
    // fixed container
    <div className="flex items-center justify-center w-screen h-screen">
      {/* to keep it in position */}
      <div className="w-full h-[402px]">
        {/* command palette */}
        <div className="max-w-[640px] w-full m-auto p-2 bg-neutral-900 border border-neutral-700 rounded-lg shadow-2xl">
          <CommandPaletteFinder />
          <CommandPaletteOptions />
        </div>
      </div>
    </div>
  );
}
