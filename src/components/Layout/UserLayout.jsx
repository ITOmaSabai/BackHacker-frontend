import { useEffect, useState } from "react";
import { useSpotsContext } from "../../contexts/SpotsContext";
import { UserProfile } from "../../features/users/components/UserProfile"
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";
import { useParams } from "react-router-dom";
import Spinner from "../Elements/Spinner/Spinner";
import { getUsers } from "../../features/users/api/getUsers";
import { SpotListTab } from "../../features/users/components/SpotListTab";
import { DeleteButton } from "../Elements/Buttons/DeleteButton";

export const UserLayout = () => {
  const { loadSpots } = useSpotsContext();
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

  return (
    <>
      <DeleteButton />
      <UserProfile userInfo={userInfo}/>
      <SpotListTab userInfo={userInfo}/>
    </>
  );
}
