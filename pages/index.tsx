import ShortcutKeys from "@/components/command-palette/components/ShortcutKeys";

export default function Home() {
  return (
    <div>
      <ShortcutKeys keys={["ctrl", "k"]} />
    </div>
  );
}
