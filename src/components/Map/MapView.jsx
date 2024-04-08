import { Box } from '@mui/material';
import { Map } from '@vis.gl/react-google-maps';

export const MapView = ({ children, onClick }) => {
  const defaultPosition = { lat: 15.637474886767327, lng: 151.47934266767578 }

  return(
    <Box sx={{height: "100%", width :"100%"}} >
      <Map
        defaultCenter = {defaultPosition}
        defaultZoom = {2}
        clickableIcons={true}
        disableDefaultUI
        gestureHandling={'greedy'}
        onClick={onClick}
      >
        {children}
      </Map>
    </Box>
  )
}