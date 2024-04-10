import { Avatar, Typography } from "@mui/material";
import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";
import Spinner from "../../../components/Elements/Spinner/Spinner";
import { WithdrawalButton } from "./WithdrawalButton";
import { LogOutButton } from "../../auth/components/LogOutButton";

export const UserProfile = ({ userInfo }) => {
  const { currentUser, loading } = useFirebaseAuth();

  if (loading) {
    return <div><Spinner /></div>;
  }

  return (
    userInfo && (
      <>
        <Typography >{userInfo.name}</Typography>
        <Avatar src={userInfo.avatar} sx={{mr: 3, width: 56, height: 56}}></Avatar>
        <LogOutButton />
        <WithdrawalButton />
      </>
    )
  )
}