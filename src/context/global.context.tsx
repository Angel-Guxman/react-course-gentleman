import { createContext, useContext } from "react";

interface GlobalContextType {
  value: number | null;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export const GlobalContext = createContext<GlobalContextType>({
  value: null,
  setValue: () => {},
});

export const useGlobalContex = () => {
  const context = useContext(GlobalContext);
  if (context.value === null) {
    throw new Error(
      "GlobalContext must be used within a GlobalContextProvider",
    );
  }
  return context;
};
