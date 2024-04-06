import { Box } from '@mui/material';
import { Map, Marker } from '@vis.gl/react-google-maps';
import { useState } from 'react';
import { CreateSpot } from '../../features/spots/components/CreateSpot';

const defaultPosition = { lat: 15.637474886767327, lng: 151.47934266767578 }

export const MapView = () => {
  const [ latLng, setLatLng ] = useState({});

  const handleMapClick = (e) => {
    const lat = parseFloat(e.detail.latLng.lat);
    const lng = parseFloat(e.detail.latLng.lng);
    setLatLng({lat: lat, lng: lng});
  }

  return(
    <Box sx={{display: "flex", flexDirection: "row"}} >
      <Box sx={{height: "100vh", width :"25%"}}>
        <CreateSpot latLng={latLng} />
      </Box>
      <Box sx={{height: "100vh", width :"75%"}} >
        <Map
          defaultCenter = {defaultPosition}
          defaultZoom = {2}
          clickableIcons={true}
          disableDefaultUI
          gestureHandling={'greedy'}
          onClick={handleMapClick}
        >
          {latLng &&
            <Marker position={latLng} ></Marker>
          }
        </Map>
      </Box>
    </Box>
  )
}