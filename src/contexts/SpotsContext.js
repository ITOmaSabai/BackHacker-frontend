import { createContext, useContext, useState } from "react";
import { getSpots } from "../features/spots/api/getSpots";

const SpotsContext = createContext();

export function SpotsContextProvider({ children }) {
  const [ spots, setSpots ] = useState();

  const loadSpots = async () => {
    const spotsData = await getSpots();
    setSpots(spotsData);
  };

  return (
    <SpotsContext.Provider value={{ spots, setSpots, loadSpots }} >
      {children}
    </SpotsContext.Provider>
  );
}

export const useSpotsContext = () => useContext(SpotsContext);