import { Box } from '@mui/material';
import { Map, Marker } from '@vis.gl/react-google-maps';
import { useState } from 'react';

const defaultPosition = { lat: 15.637474886767327, lng: 151.47934266767578 }

export const MapView = () => {
  const [ latLng, setLatLng ] = useState({});

  const handleMapClick = (e) => {
    const lat = parseFloat(e.detail.latLng.lat);
    const lng = parseFloat(e.detail.latLng.lng);
    setLatLng({lat: lat, lng: lng});
  }

  return(
    <Box sx={{height: "80vh"}} >
      <Map
        defaultCenter = {defaultPosition}
        defaultZoom = {2}
        clickableIcons={false}
        disableDefaultUI
        gestureHandling={'greedy'}
        onClick={handleMapClick}
      >
        {latLng &&
          <Marker position={latLng} ></Marker>
        }
      </Map>
    </Box>
  )
}