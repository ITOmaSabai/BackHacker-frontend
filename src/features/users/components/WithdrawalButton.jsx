import { Box, Typography } from "@mui/material";
import { deleteUser as deleteUserFromFirebase } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../api/deleteUser";
import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";
import WarningIcon from '@mui/icons-material/Warning';

export const WithdrawalButton = () => {
  const { currentUser, loginWithGoogle } = useFirebaseAuth();


  const navigate = useNavigate();

  const withdrawalUser = async () => {
    if (!currentUser) return;

    await loginWithGoogle();
    await deleteUserFromFirebase(currentUser)
    .then(() => {
      deleteUser(currentUser).then((message) => {
        navigate("/", { state: { message: message } });
      }).catch ((error) => {
        return {
          isSuccess: false,
          errorMessage: "アカウントの削除に失敗しました",
        };
      })
    })
  };

  return (
    <Box
      sx={{p: 0, m: 0}}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      onClick={withdrawalUser}
    >
      <WarningIcon fontSize="small" color="error" sx={{mr: 1}} />
      <Typography color={"error"}>退会する</Typography>
    </Box>
  )
}