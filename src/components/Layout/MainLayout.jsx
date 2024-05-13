import { Box } from "@mui/material";
import Header from "../Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import FlashMessage from "../FlashMessages/FlashMessage";
import { Footer } from "../Footer/Footer";

export const MainLayout = () => {
  const location = useLocation();
  const hideFooter = location.pathname === "/map" || location.pathname === "/spots";

  return (
    <Box sx={{height: "calc(100vh - 64px)", width: "100%"}}>
      <Header />
      <Outlet />
      <FlashMessage />
      {!hideFooter && <Footer />}
    </Box>
  )
}