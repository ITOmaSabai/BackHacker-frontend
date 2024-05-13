import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";
import { UserConfigButton } from "../../../components/Elements/Buttons/UserConfigButton";
import { useState } from "react";
import { updateUser } from "../api/updateUser";

export const UserProfile = ({ userInfo }) => {
  const { loading, userId, currentUser } = useFirebaseAuth();
  const [ editing, setEditing ] = useState(false);
  const [ editedName, setEditedName ] = useState();
  const [ updatedUser, setUpdatedUser ] = useState(null);

  const handleSubmitName = async (e) => {
    e.preventDefault();
    const updatedUser = await updateUser(currentUser, editedName, userId);
    setUpdatedUser(updatedUser);
    setEditing(false);
  }

  const handleEditName = (e) => {
    setEditedName(e.target.value);
  };

  if (!userInfo) {
    return <></>;
  }

  return (
    userInfo && (
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
        <Box sx={{display: "flex", justifyContent: "space-between", minWidth: "30%", maxWidth: "60%", py: 2}}>
          {!editing ?
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "end"}} >
                <Avatar src={updatedUser && updatedUser !== null ? updatedUser.avatar : userInfo.avatar} sx={{mr: 3, width: { xs: 42, sm: 100 }, height: {xs: 42, sm: 100 }}}></Avatar>
                <Typography fontSize={{xs: "20px", sm: "30px"}} fontWeight="bold" >{updatedUser && updatedUser !== null ? updatedUser.name : userInfo.name}</Typography>
            </Box>
          :
          <Box sx={{display: "flex", flexDirection: "row", alignItems: "center"}} >
            {/* <Avatar src={userInfo.avatar} sx={{mr: 3, width: { xs: 42, sm: 100 }, height: {xs: 42, sm: 100 }}} ></Avatar> */}
              <form onSubmit={handleSubmitName}>
                <Box display="flex" flexDirection="row">
                  <Box bgcolor={"white"}>
                    <TextField
                      variant="outlined"
                      color="info"
                      defaultValue={`${updatedUser && updatedUser !== null ? updatedUser.name : userInfo.name}`}
                      sx={{width: {xs: "150px", sm: "300px"}}}
                      onChange={handleEditName}
                    >
                    </TextField>
                  </Box>
                  <Box display="flex" flexDirection="column" sx={{ml: 1, height: "100%"}} >
                    <Button
                      type="submit"
                      color="success"
                      variant="contained"
                    >
                      保存
                    </Button>
                    <Button onClick={() => setEditing(false)} variant="text" >
                      <Typography fontSize={"12px"} >キャンセル</Typography>
                    </Button>
                  </Box>
                </Box>
              </form>
            </Box>
          }
        </Box>
        {!editing && userId === userInfo.id &&
          <UserConfigButton setEditing={setEditing} />
        }
      </Box>
    )
  )
}