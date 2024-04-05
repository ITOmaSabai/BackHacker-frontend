import { Avatar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getUser } from "../api/getUser";
import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";
import Spinner from "../../../components/Elements/Spinner/Spinner";

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
    return <div><Spinner /></div>;
  }

  return (
    userInfo && (
      <>
        <Typography >{userInfo.name}</Typography>
        <Avatar src={userInfo.avatar} sx={{mr: 3, width: 56, height: 56}}></Avatar>
      </>
    )
  )
}