import { Box,  IconButton,  Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { deleteSpot } from "../../../features/spots/api/deleteSpot";
import { useSpotsContext } from "../../../contexts/SpotsContext";
import { useFlashMessage } from "../../../contexts/FlashMessageContext";
import { useState } from "react";

export const EditButton = ({ currentUser, spot, setEditing }) => {
  const { loadSpots } = useSpotsContext();
  const { setMessage, setIsSuccessMessage } = useFlashMessage();

  const handleSpotEdit = async () => {
    setEditing(true);
  }

  const handleSpotUpdate = async () => {
    try {
      await deleteSpot(currentUser, spot.id, setIsSuccessMessage);
      await loadSpots();
      setMessage("編集が完了しました");
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <IconButton onClick={handleSpotEdit}>
      <Box sx={{p: 0, m: 0}} display={"flex"} flexDirection={"row"} >
        <EditIcon fontSize="small" sx={{mr: 1}} />
        <Typography >
          編集
        </Typography>
      </Box>
    </IconButton>
  )
}