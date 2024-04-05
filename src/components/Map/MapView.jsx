import { Box } from '@mui/material';
import { Map, Marker } from '@vis.gl/react-google-maps';

const defaultPosition = { lat: 15.637474886767327, lng: 151.47934266767578 }

export const MapView = () => {
  return(
    <Box sx={{height: "80vh"}} >
      <Map
        defaultCenter = {defaultPosition}
        defaultZoom = {2}
        clickableIcons={false}
        disableDefaultUI
        gestureHandling={'greedy'}
      >
      </Map>
    </Box>
  )
}