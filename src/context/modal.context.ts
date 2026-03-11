import { createContext, useContext } from "react";

interface ModalContextType {
  state: boolean | null;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}
const emptyState = {
  state: null,
  setState: () => {},
};
export const ModalContex = createContext<ModalContextType>(emptyState);
export const useModalContext = () => {
  const context = useContext(ModalContex);
  console.log("el contexto: ", context);
  if (context.state === null)
    throw new Error("se necesita el provider para el contexto");
  return context;
};
