import { Box } from "@mui/material"
import { MapView } from "../Map/MapView"
import { SpotIndex } from "../../features/spots/components/SpotIndex";
import { SpotDetail } from "../../features/spots/components/SpotDetail";
import { useNavigate, useParams } from "react-router-dom";

export const IndexSpotLayout = () => {
  const { spotId } = useParams();
  const navigate = useNavigate();

  const handleMarkerClick = (spotId) => {
    navigate(`/spots/${spotId}`);
  }

  return (
    <Box sx={{display: "flex", flexDirection: "row", height: "100%"}} >
      <Box sx={{height: "100%", width :"75%"}} >
        <MapView >
          <SpotIndex handleMarkerClick={handleMarkerClick} />
        </MapView>
      </Box>
      <Box sx={{height: "100%", width :"25%"}}>
        {spotId ? <SpotDetail spotId={spotId} /> : <div>Spotを選択してください</div>}
      </Box>
    </Box>
  )
}