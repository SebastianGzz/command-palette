interface Props {
  keys: string[];
}

export default function ShortcutKeys({ keys }: Props) {
  return (
    <div className="flex gap-1">
      {keys.map((key) => (
        <kbd
          key={key}
          className="px-2 py-1 text-xs font-bold rounded-md first-letter:uppercase text-neutral-300 bg-neutral-700"
        >
          {key}
        </kbd>
      ))}
    </div>
  );
}
