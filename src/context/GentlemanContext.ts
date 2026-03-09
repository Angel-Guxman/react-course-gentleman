import { createContext } from "react";
export const GentlemanContext = createContext({
  gentlemanContextValue: "hola",
  setGentlemanContextValue: () => {},
});
