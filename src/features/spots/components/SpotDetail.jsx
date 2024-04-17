import { Avatar, Box, Button, IconButton, Typography } from "@mui/material"
import { useSpotsContext } from "../../../contexts/SpotsContext"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";
import Spinner from "../../../components/Elements/Spinner/Spinner";
import { LikeButton } from "../../../components/Elements/Buttons/LikeButton";
import { EditSpot } from "./EditSpot";
import { ConfigButton } from "../../../components/Elements/Buttons/ConfigButton";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { ShareButton } from "../../../components/Elements/Buttons/ShareButton";

export const SpotDetail = ({ spotId }) => {
  const { spots } = useSpotsContext();
  const [ selectedSpot, setSelectedSpot ] = useState();
  const { currentUser, userId } = useFirebaseAuth();
  const [ editing, setEditing ] = useState(false);

  useEffect(() => {
    if (spots) {
      const spot = spots.find(spot => parseInt(spot.id) === parseInt(spotId));
      setSelectedSpot(spot);
    }
  }, [spotId, spots, currentUser]);

  if (!selectedSpot) {
    return <div><Spinner /></div>;
  }

  return (
    <Box >
      {selectedSpot && !editing ?
        <>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            sx={{px: 3, my: 2}}
          >
            <Button
              component={Link}
              to={`/users/${selectedSpot.user.id}`}
              style={{color: "inherit", textDecoration: "none", display: "flex", flexDirection: "row"}}
            >
              <Avatar src={selectedSpot.user.avatar} sx={{mr: 2}} ></Avatar>
              <Typography fontSize="20px" >{selectedSpot.user.name}</Typography>
            </Button>
          { userId === selectedSpot.user.id &&
            <ConfigButton
              currentUser={currentUser}
              selectedSpot={selectedSpot}
              setEditing={setEditing}
            />
          }
          </Box>
          <Box >
            <Typography fontSize="20px" fontWeight="bold" >{selectedSpot.name}</Typography>
            {selectedSpot.videos && selectedSpot.videos.length > 0 && (
              selectedSpot.videos.map((video) => (
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtube_video_id}`}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  width="100%"
                >
                </iframe>
              ))
            )}
          </Box>
          <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
            <IconButton disabled sx={{mx: 2}} ><ChatBubbleIcon color={"#c2c2c2"} /></IconButton>
            <LikeButton
              savedLikes={selectedSpot.likes}
              selectedSpot={selectedSpot}
            />
            <ShareButton sx={{mx: 2}} url={`https://twitter.com/share?url=${process.env.REACT_APP_PUBLIC_URL}spots/${parseInt(selectedSpot.id)} (※PC💻環境より閲覧してください)&text=【BackHacker.】で${selectedSpot.name}を見に行かない？🌎%0a%0a`}  />
          </Box>
        </>
      :
        <EditSpot spot={selectedSpot} setEditing={setEditing} title={"スポット編集"} />
      }
    </Box>
  )
}