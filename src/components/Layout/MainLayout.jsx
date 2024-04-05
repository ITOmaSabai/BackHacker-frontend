import { Link } from "react-router-dom";
import { SignInButton } from "../../features/auth/SignInButton";
import { WithdrawalButton } from "../../features/users/components/WithdrawalButton";
import TransitionsSnackbar from "../FlashMessages/FlashMessage";
import { IconButton } from "@mui/material";
import Header from "../Header/Header";

export const MainLayout = () => {
  return (
    <>
    <Header />
    <TransitionsSnackbar />
    </>
  )
}