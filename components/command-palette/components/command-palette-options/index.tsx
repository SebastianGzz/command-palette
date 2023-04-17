import { useCommandPalette } from "@/components/command-palette/hooks/useCommandPalette";

export default function CommandPaletteOptions() {
  const commandPalette = useCommandPalette();
  const commandPaletteIndex = commandPalette.commandPaletteIndex;

  return (
    <ul className="mt-2 overflow-y-auto max-h-80 scroll-smooth">
      {commandPalette.commandPaletteResults.map((category, ci) => (
        <li key={ci}>
          <div className="flex items-center px-2 text-xs h-7 text-neutral-400">
            {category.title}
          </div>

          <ul>
            {category.options.map((option, oi) => (
              <li key={option.id} id={option.id.toString()}>
                <button
                  onClick={commandPalette.handleExecuteAction}
                  onMouseEnter={() => commandPalette.handleChooseOption(ci, oi)}
                  className={`${
                    commandPaletteIndex[0] === ci &&
                    commandPaletteIndex[1] === oi
                      ? "bg-neutral-800 text-white"
                      : "bg-transparent text-neutral-400/80"
                  } flex items-center gap-3 w-full h-12 px-4 rounded-lg`}
                >
                  <div className="w-5 h-5">{option.icon}</div>
                  <h3 className="text-sm">{option.name}</h3>
                </button>
              </li>
            ))}
          </ul>
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
