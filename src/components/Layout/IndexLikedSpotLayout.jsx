import { Box } from "@mui/material"
import { MapView } from "../Map/MapView"
import { LikedSpotIndex } from "../../features/spots/components/LikedSpotIndex";
import { useNavigate, useParams } from "react-router-dom";
import SpotDetailModal from "../Elements/Modals/SpotDetailModal";
import { useState } from "react";

export const IndexLikedSpotLayout = () => {
  const { spotId } = useParams();
  const navigate = useNavigate();
  const [ isClickedMarkerId, setIsClickedMarkerId ] = useState(false);
  const [ open, setOpen ] = useState(false);

  const handleMarkerClick = (spotId) => {
    setIsClickedMarkerId(spotId);
    setOpen(true);
    navigate(`/spots/${spotId}`);
  }

  return (
    <Box sx={{display: "flex", flexDirection: "row", height: "100%"}} >
      <Box sx={{height: "100%", width :"100%"}} >
        <MapView >
          <LikedSpotIndex
            handleMarkerClick={handleMarkerClick}
            isClickedMarkerId={isClickedMarkerId}
          />
        </MapView>
        <SpotDetailModal spotId={spotId} open={open} setOpen={setOpen} />
      </Box>
    </Box>
  )
}