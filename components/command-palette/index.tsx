import { useCommandPalette } from "@/hooks/useCommandPalette";
import Portal, { PortalTarget } from "../portal";
import CommandPaletteFinder from "./command-palette-finder";
import CommandPaletteOptions from "./command-palette-options";

export default function CommandPalette() {
  const commandPalette = useCommandPalette();

  return (
    <>
      {commandPalette.commandPaletteOpen && (
        <Portal target={PortalTarget.MODAL}>
          <div className="flex items-center justify-center w-screen h-screen">
            <div className="w-full h-[402px]">
              <div className="max-w-[640px] w-full m-auto p-2 bg-neutral-900 border border-neutral-700 rounded-lg shadow-2xl">
                <CommandPaletteFinder />
                <CommandPaletteOptions />
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
