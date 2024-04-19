import { Box } from "@mui/material"
import { CreateSpot } from "../../features/spots/components/CreateSpot"
import { MapView } from "../Map/MapView";
import { useState } from "react";
import { Marker } from '@vis.gl/react-google-maps';
import MessageModal from "../Elements/Modals/MessageModal";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";
import SpotModal from "../Elements/Modals/SpotModal";

export const CreateSpotLayout = () => {
  const { currentUser, loading } = useFirebaseAuth();
  const [ latLng, setLatLng ] = useState({});
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

  const searchFailureModal = {
    title: "動画を取得できませんでした",
    body: "山、砂漠、海などは避け、都市部をクリックして再度試してみてください 🙇‍♂️",
    icon: "😭",
    button: "close"
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
    <Box sx={{display: "flex", flexDirection: "row", height: "100%"}} >
      {createdSpot && createdSpot !== null &&
        <SpotModal
          open={open}
          setOpen={setOpen}
          spot={createdSpot}
          setLatLng={setLatLng}
        />
      }
      <Box sx={{height: "100%", width :"75%"}} >
        <MapView onClick={handleMapClick} >
          {latLng &&
            <Marker position={latLng} />
          }
        </MapView>
      </Box>
      <Box sx={{height: "100%", width :"25%"}}>
        <CreateSpot latLng={latLng} setOpen={setOpen} setCreatedSpot={setCreatedSpot} />
      </Box>
    </Box>
  )
}