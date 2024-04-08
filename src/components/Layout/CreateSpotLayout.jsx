import { Box } from "@mui/material"
import { CreateSpot } from "../../features/spots/components/CreateSpot"
import { MapView } from "../Map/MapView";
import { useState } from "react";
import { Marker } from '@vis.gl/react-google-maps';

export const CreateSpotLayout = () => {
  const [ latLng, setLatLng ] = useState({});

  const handleMapClick = (e) => {
    const lat = parseFloat(e.detail.latLng.lat);
    const lng = parseFloat(e.detail.latLng.lng);
    setLatLng({lat: lat, lng: lng});
  }

  return (
    <Box sx={{display: "flex", flexDirection: "row", height: "100%"}} >
      <Box sx={{height: "100%", width :"75%"}} >
        <MapView latLng={latLng} setLatLng={setLatLng} onClick={handleMapClick} >
          {latLng &&
            <Marker position={latLng} />
          }
        </MapView>
      </Box>
      <Box sx={{height: "100%", width :"25%"}}>
        <CreateSpot latLng={latLng}/>
      </Box>
    </Box>
  )
}