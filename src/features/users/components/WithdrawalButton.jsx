import { Button, IconButton } from "@mui/material";
import { signInWithPopup, getAuth, GoogleAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { deleteUser as deleteUserFromFirebase } from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../../../lib/firebase";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../api/deleteUser";

export const WithdrawalButton = () => {
  const navigate = useNavigate();

  const withdrawalUser = () => {
    const login = () => {
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider);
    };

    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (currentUser) {
      // 最近サインインしていないとエラーになってしまうので、再認証してクレデンシャルを取得
      login().then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        reauthenticateWithCredential(currentUser, credential)
        .then(() => {
          // User re-authenticated.
          deleteUserFromFirebase(currentUser)
          .then(() => {
            // User deleted.
            if (currentUser?.id) {
              deleteDoc(doc(db, "users", currentUser.id));
            }
            deleteUser(currentUser).then((message) => {
              navigate("/", { state: { message: message } });
            }).catch ((error) => {
              return {
                isSuccess: false,
                errorMessage: "アカウントの削除に失敗しました",
              };
            })
          })
          .catch((error) => {
            // An error ocurred
            return {
              isSuccess: false,
              errorMessage: "アカウントの削除に失敗しました",
            };
          });
        })
        .catch((error) => {
          // An error ocurred
          return {
            isSuccess: false,
            errorMessage: "エラーが発生しました",
          };
        });
      });
    }
  }

  return (
    <IconButton onClick={withdrawalUser} >退会</IconButton>
  )
}