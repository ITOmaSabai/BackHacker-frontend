import { Box, Button, Typography } from "@mui/material"

export const HeroLayout = () => {
  return (
    <Box sx={{height: "100%", display: "flex", alignItems: "center"}} bgcolor={"black"} >
      <Box >
        <Typography variant="h1" color={"white"} sx={{mx: 5, mb: 1}} >BackHacker.</Typography>
        <Typography variant="h4" color={"white"} sx={{mx: 5, mb: 7}} >ひらけPC。いくぞ世界。</Typography>
        <Button variant="contained" color="primary" sx={{mx: 6, mb: 3}} >旅を始める</Button>
      </Box>
    </Box>
  )
}