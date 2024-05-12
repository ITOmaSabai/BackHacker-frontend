import { Box } from "@mui/material"
import { CreateSpot } from "../../features/spots/components/CreateSpot"
import { MapView } from "../Map/MapView";
import { useState } from "react";
import { Marker } from '@vis.gl/react-google-maps';
import MessageModal from "../Elements/Modals/MessageModal";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";
import SpotModal from "../Elements/Modals/SpotModal";
import { useLocation } from 'react-router-dom';
import { MyMarker } from "../Elements/Markers/MyMarker";
import { CreateComment } from "../../features/comments/components/CreateComment";

export const CreateSpotLayout = () => {
  const { currentUser, loading } = useFirebaseAuth();
  const location = useLocation();
  const [ latLng, setLatLng ] = useState(location.state?.latLng ?? null);
  const [ open, setOpen ] = useState(true);
  const [ createdSpot, setCreatedSpot ] = useState();

  const handleMapClick = (e) => {
    const lat = parseFloat(e.detail.latLng.lat);
    const lng = parseFloat(e.detail.latLng.lng);
    setLatLng({lat: lat, lng: lng});
  }

  const createSpotModalMessage = {
    title: "ログインすると動画を取得できます",
    body: "街の様子をみんなにシェアしよう！",
    icon: "📺 👀"
  };

  if (loading) return;

  if (!currentUser) {
    return (
      <MessageModal
        open={open}
        setOpen={setOpen}
        title={createSpotModalMessage.title}
        body={createSpotModalMessage.body}
        icon={createSpotModalMessage.icon}
        button={"login"}
      />
    );
  }

  return (
    <Box sx={{display: "flex", flexDirection: { xs: "column", sm: "row" }, height: "100%"}} >
      {createdSpot && createdSpot !== null &&
        <SpotModal
          open={open}
          setOpen={setOpen}
          spot={createdSpot}
          setLatLng={setLatLng}
        />
      }
      <Box
        display={{xs: "block", sm: "block"}}
        sx={{
          height: { xs: "70%", sm: "100%" },
          width : { xs: "100%", sm: "75%" }
        }}
      >
        <MapView onClick={handleMapClick} >
          {latLng &&
            <MyMarker position={latLng} />
          }
        </MapView>
      </Box>
      <Box
        display={{xs: "block", sm: "block"}}
        sx={{
          height: { xs: "30%", sm: "100%" },
          width : { xs: "100%", sm: "25%" }
        }}
      >
        <CreateSpot latLng={latLng} setLatLng={setLatLng} setOpen={setOpen} setCreatedSpot={setCreatedSpot} />
      </Box>
    </Box>
  )
}