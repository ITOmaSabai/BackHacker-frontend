import { Box } from "@mui/material";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import FlashMessage from "../FlashMessages/FlashMessage";

export const MainLayout = () => {
  return (
    <Box sx={{height: "calc(100vh - 64px)", width: "100%"}}>
      <Header />
      <Outlet />
      <FlashMessage />
    </Box>
  )
}