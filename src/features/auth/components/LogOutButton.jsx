import { Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";

export const LogOutButton = () => {
  const { logout } = useFirebaseAuth();

  const handleSignOut = async () => {
    console.log("ボタンが押されました")
    await logout();
  };

  return (
    <Button onClick={handleSignOut} color="warning">
      <LogoutIcon sx={{mr: 2}} />
      ログアウト
    </Button>
  );
};