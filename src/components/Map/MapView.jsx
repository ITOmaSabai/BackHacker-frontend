import { Box } from '@mui/material';
import { Map, Marker } from '@vis.gl/react-google-maps';

export const MapView = ({ latLng, setLatLng }) => {
  console.log(latLng)
  console.log(setLatLng)
  const defaultPosition = { lat: 15.637474886767327, lng: 151.47934266767578 }

  const handleMapClick = (e) => {
    const lat = parseFloat(e.detail.latLng.lat);
    const lng = parseFloat(e.detail.latLng.lng);
    setLatLng({lat: lat, lng: lng});
  }

  return(
    <Box sx={{height: "100%", width :"100%"}} >
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
  )
}