import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const HeroLayout = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/map");
  }
  return (
    <Box sx={{height: "100%", display: "flex", alignItems: "center"}} bgcolor={"black"} >
      <Box sx={{mx: 20}} >
        <Typography variant="h1" color={"white"} sx={{mb: 1}} >BackHacker.</Typography>
        <Typography variant="h4" color={"white"} sx={{mb: 7}} >バーチャル旅行に出かけよう</Typography>
        <Button onClick={handleClick} variant="outlined" color="info" sx={{mx: 1, mb: 3}} size="large" >旅を始める</Button>
      </Box>
    </Box>
  )
}