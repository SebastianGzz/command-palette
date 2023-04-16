import CommandPaletteProvider from "@/contexts/command-palette/CommandPaletteProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <CommandPaletteProvider>
        <Component {...pageProps} />
      </CommandPaletteProvider>
    </div>
  );
}
