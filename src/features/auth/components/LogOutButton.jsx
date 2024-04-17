import { Box, Typography } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";

export const LogOutButton = () => {
  const { logout } = useFirebaseAuth();

  const handleSignOut = async () => {
    await logout();
  };

  return (
    <Box
      sx={{p: 0, m: 0}}
      display={"flex"}
      flexDirection={"row"}
      onClick={handleSignOut}
    >
      <LogoutIcon fontSize="small" sx={{mr: 1}} />
      <Typography>ログアウト</Typography>
    </Box>
  );
};