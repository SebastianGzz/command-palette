import ShortcutKeys from "@/components/command-palette/components/ShortcutKeys";
import { useCommandPalette } from "@/components/command-palette/hooks/useCommandPalette";

export default function CommandPaletteFinder() {
  const commandPalette = useCommandPalette();

  return (
    <div className="relative">
      <input
        autoFocus
        type="text"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        placeholder="What do you need?"
        onChange={commandPalette.handleCommandPaletteSearch}
        className="w-full px-2 py-4 text-lg font-medium text-white bg-transparent border-b outline-none border-neutral-700 placeholder-neutral-500"
      />

      <div className="absolute -translate-y-1/2 right-4 top-1/2">
        <ShortcutKeys keys={["ctrl", "k"]} />
      </div>
    </div>
  );
}
