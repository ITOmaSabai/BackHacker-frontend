import { Box } from "@mui/material";
import TransitionsSnackbar from "../FlashMessages/FlashMessage";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <Box sx={{height: "calc(100vh - 64px)", width: "100%"}}>
      <Header />
      <Outlet />
      {/* <Link to="/map" style={{color: "inherit", textDecoration: "none"}}>新規投稿</Link> */}
      <TransitionsSnackbar />
    </Box>
  )
}