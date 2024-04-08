import { Box } from "@mui/material"
import { CreateSpot } from "../../features/spots/components/CreateSpot"
import { MapView } from "../Map/MapView";
import { useState } from "react";

export const CreateSpotLsyout = () => {
  const [ latLng, setLatLng ] = useState({});

  return (
    <Box sx={{display: "flex", flexDirection: "row", height: "100%"}} >
      <Box sx={{height: "100%", width :"75%"}} >
        <MapView latLng={latLng} setLatLng={setLatLng}/>
      </Box>
      <Box sx={{height: "100%", width :"25%"}}>
        <CreateSpot latLng={latLng}/>
      </Box>
    </Box>
  )
}