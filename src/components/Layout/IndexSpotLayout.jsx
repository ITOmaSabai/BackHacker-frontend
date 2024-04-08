import { Box } from "@mui/material"
import { MapView } from "../Map/MapView"
import { SpotIndex } from "../../features/spots/components/SpotIndex";

export const IndexSpotLayout = () => {

  return (
    <Box sx={{display: "flex", flexDirection: "row", height: "100%"}} >
      <Box sx={{height: "100%", width :"75%"}} >
        <MapView >
          <SpotIndex />
        </MapView>
      </Box>
      <Box sx={{height: "100%", width :"25%"}}>
      </Box>
    </Box>
  )
}