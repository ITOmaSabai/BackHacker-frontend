import { Box } from "@mui/material"
import { MapView } from "../Map/MapView"
import { SpotIndex } from "../../features/spots/components/SpotIndex";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import SpotDetailModal from "../Elements/Modals/SpotDetailModal";

export const IndexSpotLayout = () => {
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
          <SpotIndex
            handleMarkerClick={handleMarkerClick}
            isClickedMarkerId={isClickedMarkerId}
          />
          <SpotDetailModal spotId={spotId} open={open} setOpen={setOpen} />
        </MapView>
      </Box>
    </Box>
  )
}