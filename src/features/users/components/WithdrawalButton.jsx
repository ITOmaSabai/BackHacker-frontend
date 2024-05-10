import { Box, Typography } from "@mui/material";
import {
  deleteUser as deleteUserFromFirebase,
  signInWithPopup,
  GoogleAuthProvider,
  reauthenticateWithCredential
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../api/deleteUser";
import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";
import WarningIcon from '@mui/icons-material/Warning';
import { auth } from "../../../lib/firebase";

export const WithdrawalButton = () => {
  const { currentUser } = useFirebaseAuth();

  const navigate = useNavigate();

  const withdrawalUser = async () => {
    if (!currentUser) return;

    // 退会するためには最近ログインしている必要があるので、ログイン処理を実行する
    const login = async () => {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      return result;
    }

    // ログインしたユーザーから新しい認証情報を取得し、ユーザーを再認証する
    // see document:https://firebase.google.com/docs/auth/web/manage-users?hl=ja#re-authenticate_a_user
    const result = await login();
    const credential = GoogleAuthProvider.credentialFromResult(result);
    await reauthenticateWithCredential(currentUser, credential);
    // Firebaseからユーザーを削除後、データベースからもユーザーを削除する
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