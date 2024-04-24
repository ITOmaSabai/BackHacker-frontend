import { Box } from "@mui/material"
import { MapView } from "../Map/MapView"
import { SpotIndex } from "../../features/spots/components/SpotIndex";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import SpotDetailModal from "../Elements/Modals/SpotDetailModal";
import { useLocation } from "react-router-dom";
import FloatingButton from "../Elements/Buttons/FloatingButton";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";
import MessageModal from "../Elements/Modals/MessageModal";
import { MyMarker } from "../Elements/Markers/MyMarker";

export const IndexSpotLayout = () => {
  const { currentUser, loading } = useFirebaseAuth();
  const { spotId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [ clickedMarkerId, setClickedMarkerId ] = useState(location.state?.spotId ?? false);
  const [ open, setOpen ] = useState(location.state?.open ?? false);
  const [ loginModalOpen, setLoginModalOpen ] = useState(false);
  const [ latLng, setLatLng ] = useState();

  const createSpotModalMessage = {
    title: "ログインするとスポット投稿できます",
    body: "街の様子を動画で楽しもう！",
    icon: "📺 👀"
  };

  const handleMarkerClick = (spotId) => {
    setClickedMarkerId(spotId);
    setOpen(true);
    setLatLng(null);
    navigate(`/spots/${spotId}`);
  }

  const handleMapClick = (e) => {
    const lat = parseFloat(e.detail.latLng.lat);
    const lng = parseFloat(e.detail.latLng.lng);
    setLatLng({lat: lat, lng: lng});
    setClickedMarkerId(null);
  }

  const handleButtonClick = () => {
    if (loading) return;

    if (!currentUser) {
      setLoginModalOpen(true);
    } else {
      navigate("/spots");
    }
  }

  return (
    <Box sx={{display: "flex", flexDirection: "row", height: "100%"}} >
      <Box sx={{height: "100%", width :"100%"}} >
        <MapView onClick={handleMapClick} >
          {latLng &&
            <MyMarker position={latLng} />
          }
          <SpotIndex
            handleMarkerClick={handleMarkerClick}
            clickedMarkerId={clickedMarkerId}
          />
          <SpotDetailModal spotId={spotId} open={open} setOpen={setOpen} />
          <FloatingButton text={"新規投稿"} onClick={handleButtonClick} />
          <MessageModal
            open={loginModalOpen}
            setOpen={setLoginModalOpen}
            title={createSpotModalMessage.title}
            body={createSpotModalMessage.body}
            icon={createSpotModalMessage.icon}
            button={"login"}
          />
        </MapView>
      </Box>
    </Box>
  )
}