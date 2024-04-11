import { createContext, useContext, useState } from "react";
import { getSpots } from "../features/spots/api/getSpots";

const SpotsContext = createContext();

export function SpotsContextProvider({ children }) {
  const [ spots, setSpots ] = useState();
  const [ likedSpots, setLikedSpots ] = useState();

  const loadSpots = async () => {
    const spotsData = await getSpots();
    setSpots(spotsData);
    return spotsData;
  };

  const loadLikedSpots = async (userId) => {
    const spotsData = await getSpots();
    const likedSpotData = await spotsData.filter(spot =>
      spot.likes.some(like => parseInt(like.user_id) === parseInt(userId)));
    setLikedSpots(likedSpotData);
    return likedSpotData;
  }

  return (
    <SpotsContext.Provider value={{
      spots,
      setSpots,
      loadSpots,
      loadLikedSpots,
      likedSpots,
      setLikedSpots
    }} >
      {children}
    </SpotsContext.Provider>
  );
}

export const useSpotsContext = () => useContext(SpotsContext);