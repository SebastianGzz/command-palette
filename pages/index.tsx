import { useEffect } from "react";
import { useCommandPalette } from "@/hooks/useCommandPalette";

export default function Home() {
  const commandPalette = useCommandPalette();

  useEffect(() => {
    console.log(commandPalette);
  });

  return (
    <div>
      <h1>Home</h1>

      {commandPalette.commandPaletteOpen && (
        <div className="max-w-[640px] m-auto p-2 bg-neutral-900 border border-neutral-700 rounded-lg">
          <input
            autoFocus
            type="text"
            placeholder="What do you need?"
            onChange={commandPalette.handleCommandPaletteSearch}
            className="w-full px-2 py-4 text-white bg-transparent border-b outline-none border-neutral-700 placeholder-neutral-500"
          />

          <ul className="mt-2 overflow-y-auto max-h-80">
            {commandPalette.commandPaletteResults.map((option, index) => (
              <li key={option.id} className="bg-neutral-900">
                <button
                  onMouseEnter={() =>
                    commandPalette.handleChooseOption(option.id)
                  }
                  onClick={commandPalette.handleExecuteAction}
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
          </ul>
        </div>
      )}
    </div>
  );
}
