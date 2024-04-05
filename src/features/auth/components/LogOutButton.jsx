import { getAuth, signOut } from "firebase/auth";
import { Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

export const LogOutButton = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate('/', { state: {message: "ログアウトしました"}} );
    }).catch((error) => {
    });
  };

  return (
    <Button onClick={handleSignOut} color="warning">
      <LogoutIcon sx={{mr: 2}} />
      ログアウト
    </Button>
  );
};