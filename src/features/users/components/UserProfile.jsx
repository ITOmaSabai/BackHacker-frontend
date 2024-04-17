import { Avatar, Box, Typography } from "@mui/material";
import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";
import { UserConfigButton } from "../../../components/Elements/Buttons/UserConfigButton";

export const UserProfile = ({ userInfo }) => {
  const { loading, userId } = useFirebaseAuth();

  if (loading) {
    return <></>;
  }

  return (
    userInfo && (
      <>
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
        <Box sx={{display: "flex", justifyContent: "space-between", width: "30%", maxWidth: "50%", py: 2}}>
        <Box sx={{display: "flex", flexDirection: "row", alignItems: "end"}} >
          <Avatar src={userInfo.avatar} sx={{mr: 3, width: 100, height: 100}}></Avatar>
          <Typography fontSize="30px" >{userInfo.name}</Typography>
        </Box>
        {userId === userInfo.id &&
          <UserConfigButton />
        }
      </Box>
      </Box>
      </>
    )
  )
}