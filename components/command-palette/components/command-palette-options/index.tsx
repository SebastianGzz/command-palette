import { useCommandPalette } from "@/components/command-palette/hooks/useCommandPalette";

export default function CommandPaletteOptions() {
  const commandPalette = useCommandPalette();

  return (
    <ul className="mt-2 overflow-y-auto max-h-80 scroll-smooth">
      {commandPalette.commandPaletteResults.map((option, index) => (
        <li key={option.id} id={option.id.toString()}>
          <button
            onClick={commandPalette.handleExecuteAction}
            onMouseMove={() => commandPalette.handleChooseOption(option.id)}
            className={`${
              commandPalette.commandPaletteIndex === index
                ? "bg-neutral-800 text-white"
                : "bg-transparent text-neutral-500"
            } flex items-center gap-3 w-full h-12 px-4 rounded-lg`}
          >
            <div className="w-5 h-5">{option.icon}</div>
            <h3 className="text-sm">{option.name}</h3>
          </button>
        </li>
      ))}

      {/* shown when there are no results */}
      {commandPalette.commandPaletteResults.length === 0 && (
        <li className="flex items-center w-full h-12 gap-3 px-4 bg-transparent">
          <p>No results. Try another option.</p>
        </li>
      )}
    </ul>
  );
}
