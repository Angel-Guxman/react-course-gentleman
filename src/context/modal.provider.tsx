import { useState, type ReactNode } from "react";
import { ModalContex } from "./modal.context";

interface Props {
  children: ReactNode;
}
export const ModalProvider = ({ children }: Props) => {
  const [state, setState] = useState(false);
  return (
    <ModalContex.Provider value={{ state, setState }}>
      {children}
    </ModalContex.Provider>
  );
};
