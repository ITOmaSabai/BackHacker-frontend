import { useEffect } from "react";
import { useSpotsContext } from "../../contexts/SpotsContext";
import { SpotCard } from "../../features/spots/components/SpotCard"
import { UserProfile } from "../../features/users/components/UserProfile"
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";

export const UserLayout = () => {
  const { spots, loadSpots } = useSpotsContext();
  const { currentUser } = useFirebaseAuth();

  useEffect(() => {
    loadSpots();
  }, []);

  const userPostedSpots = () => {
    return spots && spots.filter((spot) => (
      currentUser && spot.userId === currentUser.id
    ))
  }

  return (
    <>
      <UserProfile />
      <SpotCard spots={userPostedSpots()} />
    </>
  )
}
