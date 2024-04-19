import { Box } from "@mui/material"
import { MapView } from "../Map/MapView"
import { SpotIndex } from "../../features/spots/components/SpotIndex";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import SpotDetailModal from "../Elements/Modals/SpotDetailModal";
import { useLocation } from "react-router-dom";
import FloatingButton from "../Elements/Buttons/FloatingButton";

export const IndexSpotLayout = () => {
  const { spotId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [ clickedMarkerId, setClickedMarkerId ] = useState(location.state?.spotId ?? false);
  const [ open, setOpen ] = useState(location.state?.open ?? false);

  const handleMarkerClick = (spotId) => {
    setClickedMarkerId(spotId);
    setOpen(true);
    navigate(`/spots/${spotId}`);
  }

  const handleButtonClick = () => {
    navigate("/spots");
  }

  return (
    <Box sx={{display: "flex", flexDirection: "row", height: "100%"}} >
      <Box sx={{height: "100%", width :"100%"}} >
        <MapView >
          <SpotIndex
            handleMarkerClick={handleMarkerClick}
            clickedMarkerId={clickedMarkerId}
          />
          <SpotDetailModal spotId={spotId} open={open} setOpen={setOpen} />
          <FloatingButton text={"新規投稿"} onClick={handleButtonClick} />
        </MapView>
      </Box>
    </Box>
  )
}