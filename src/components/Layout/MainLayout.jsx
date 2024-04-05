import { Link } from "react-router-dom";
import { SignInButton } from "../../features/auth/SignInButton";
import { WithdrawalButton } from "../../features/users/components/WithdrawalButton";
import TransitionsSnackbar from "../FlashMessages/FlashMessage";
import { IconButton } from "@mui/material";

export const MainLayout = () => {
  return (
    <>
    <SignInButton text={"会員登録・ログイン"} />
    <IconButton ><Link to={"http://localhost:3001/profile"} style={{color: "inherit", textDecoration: "none"}} target='_blank'>プロフィール</Link></IconButton>
    <WithdrawalButton />
    <TransitionsSnackbar />
    </>
  )
}