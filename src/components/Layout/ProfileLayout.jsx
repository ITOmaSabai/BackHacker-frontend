import { useEffect, useState } from "react";
import { useSpotsContext } from "../../contexts/SpotsContext";
import { UserProfile } from "../../features/users/components/UserProfile"
import { getUsers } from "../../features/users/api/getUsers";
import { SpotListTab } from "../../features/users/components/SpotListTab";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";

export const ProfileLayout = () => {
  const { loadSpots } = useSpotsContext();
  const { userId } = useFirebaseAuth();
  const [ userInfo, setUserInfo ] = useState();

  useEffect(() => {
    loadSpots();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getUsers();

        if (userId) {
          const selectedUser = users.find(user => parseInt(user.id) === parseInt(userId))
          setUserInfo(selectedUser);
        }
      } catch (error) {
        console.error('Failed to fetch user data', error);
      }
    }
    fetchData();
  }, [userId])

  if (!userInfo) {
    return <div></div>;
  }

  return (
    <>
      <UserProfile userInfo={userInfo}/>
      <SpotListTab userInfo={userInfo}/>
    </>
  );
}
