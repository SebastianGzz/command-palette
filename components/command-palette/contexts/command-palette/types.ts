export interface ICommandPaletteOption {
  id: number;
  icon: JSX.Element;
  name: string;
  action: () => void;
}

export interface ICommandPaletteData {
  title: string;
  options: ICommandPaletteOption[];
}

// React.ChangeEvent<HTMLInputElement>
export type TInputEvent = React.ChangeEvent<HTMLInputElement>;
