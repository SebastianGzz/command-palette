export interface ICommandPaletteOption {
  id: number;
  icon: JSX.Element;
  name: string;
  action: () => void;
}

// React.ChangeEvent<HTMLInputElement>
export type TInputEvent = React.ChangeEvent<HTMLInputElement>;
