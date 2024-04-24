import { Box } from '@mui/material';
import { Map } from '@vis.gl/react-google-maps';

export const MapView = ({ children, onClick }) => {
  const defaultPosition = { lat: parseFloat(15.637474886767327), lng: parseFloat(151.47934266767578) }

  return(
    <Box sx={{height: "100%", width :"100%"}} >
      <Map
        mapId={process.env.REACT_APP_GOOGLE_MAP_ID}
        defaultCenter = {defaultPosition}
        defaultZoom = {2}
        clickableIcons={true}
        disableDefaultUI
        gestureHandling={'greedy'}
        onClick={onClick}
        minZoom={2}
        maxZoom={16}
      >
        {children}
      </Map>
    </Box>
  )
}