import { useCommandPalette } from "@/hooks/useCommandPalette";

export default function CommandPaletteFinder() {
  const commandPalette = useCommandPalette();

  return (
    <input
      autoFocus
      type="text"
      placeholder="What do you need?"
      onChange={commandPalette.handleCommandPaletteSearch}
      className="w-full px-2 py-4 text-white bg-transparent border-b outline-none border-neutral-700 placeholder-neutral-500"
    />
  );
}
