import { createContext, useContext, useState } from "react";

const SpotsContext = createContext();

export function SpotsContextProvider({ children }) {
  const [ spots, setSpots ] = useState();

  return (
    <SpotsContext.Provider value={{ spots, setSpots }} >
      {children}
    </SpotsContext.Provider>
  );
}

export const useSpotsContext = () => useContext(SpotsContext);