import { Box, Typography } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const DeleteButton = () => {
  const handleSpotDelete = () => {

  }

  return (
    <Box
      sx={{p: 0, m: 0}}
      display={"flex"}
      flexDirection={"row"}
      color={"red"}
      onClick={handleSpotDelete}
    >
      <DeleteForeverIcon fontSize="small" sx={{mr: 1}} />
      <Typography >
        削除
      </Typography>
    </Box>
  )
}