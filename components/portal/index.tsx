import { createPortal } from "react-dom";

export enum PortalTarget {
  MODAL = "modal",
}

interface Props {
  target: PortalTarget;
  children: React.ReactNode;
}

const Portal: React.FC<Props> = ({ target, children }) => {
  const domElement = document.getElementById(target);

  return domElement ? createPortal(children, domElement) : null;
};

export default Portal;
