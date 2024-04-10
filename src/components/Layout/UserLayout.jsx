import { useEffect, useState } from "react";
import { useSpotsContext } from "../../contexts/SpotsContext";
import { SpotCard } from "../../features/spots/components/SpotCard"
import { UserProfile } from "../../features/users/components/UserProfile"
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";
import { useParams } from "react-router-dom";
import Spinner from "../Elements/Spinner/Spinner";
import { getUser } from "../../features/users/api/getUser";
import { getUsers } from "../../features/users/api/getUsers";

export const UserLayout = () => {
  const { spots, loadSpots } = useSpotsContext();
  const { currentUser } = useFirebaseAuth();
  const { userId } = useParams();
  const [ userInfo, setUserInfo ] = useState();

  useEffect(() => {
    loadSpots();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getUsers();
        const selectedUser = users.find(user => parseInt(user.id) === parseInt(userId))
        setUserInfo(selectedUser);
      } catch (error) {
        console.error('Failed to fetch user data', error);
      }
    }
    fetchData();
  }, [currentUser, userId])

  if (!currentUser) {
    return <div><Spinner /></div>;
  }

  const userPostedSpots = () => {
    return spots && spots.filter(spot => parseInt(spot.user_id) === parseInt(userId));
  }

  return (
    <>
      <UserProfile userInfo={userInfo}/>
      <SpotCard spots={userPostedSpots()} />
    </>
  );
}
