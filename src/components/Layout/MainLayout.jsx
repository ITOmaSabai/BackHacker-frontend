import { Button } from "@mui/material";
import TransitionsSnackbar from "../FlashMessages/FlashMessage";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Link to="/map" style={{color: "inherit", textDecoration: "none"}}>新規投稿</Link>
      <TransitionsSnackbar />
    </>
  )
}