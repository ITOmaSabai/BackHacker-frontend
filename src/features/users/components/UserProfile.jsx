import { Typography } from "@mui/material";
import { getAuth } from "firebase/auth"
import { useEffect, useState } from "react";
import { getUser } from "../api/getUser";
import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";

export const UserProfile = () => {
  const { currentUser, loading } = useFirebaseAuth();
  const [ userInfo, setUserInfo ] = useState();

  useEffect(() => {
    const fetchData = async () => {
    if (currentUser) {
      try {
      const userInfo = await getUser(currentUser);
      setUserInfo(userInfo);
      } catch (error) {
        console.error('Failed to fetch user data', error);
      }
    }
  }
  fetchData();
  }, [currentUser])

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    userInfo && (
      <>
        <Typography >{userInfo.name}</Typography>
        <Typography ></Typography>
      </>
    )
  )
}