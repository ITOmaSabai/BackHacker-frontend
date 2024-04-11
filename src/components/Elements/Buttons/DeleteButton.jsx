import { Box, Typography } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteSpot } from "../../../features/spots/api/deleteSpot";
import { useNavigate } from "react-router-dom";
import { useSpotsContext } from "../../../contexts/SpotsContext";
import { useFlashMessage } from "../../../contexts/FlashMessageContext";

export const DeleteButton = ({ currentUser, spot }) => {
  const { loadSpots } = useSpotsContext();
  const { setMessage, setIsSuccessMessage } = useFlashMessage();
  const navigate = useNavigate();

  const handleSpotDelete = async () => {
    try {
      await deleteSpot(currentUser, spot.id, setIsSuccessMessage);
      await loadSpots();
      setMessage("削除しました");
      navigate('/map');
    } catch (error) {
      setMessage(error.message);
      navigate('/map');
    }
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