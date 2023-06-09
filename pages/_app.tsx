import CommandPalette from "@/components/command-palette/components/CommandPalette";
import CommandPaletteProvider from "@/components/command-palette/contexts/command-palette/CommandPaletteProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <CommandPaletteProvider>
        <CommandPalette />
        <Component {...pageProps} />
      </CommandPaletteProvider>
    </div>
  );
}
