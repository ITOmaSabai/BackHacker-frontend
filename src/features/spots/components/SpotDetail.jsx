import { Avatar, Box, Button, IconButton, Typography } from "@mui/material"
import { useSpotsContext } from "../../../contexts/SpotsContext"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";
import { LikeButton } from "../../../components/Elements/Buttons/LikeButton";
import { EditSpot } from "./EditSpot";
import { ConfigButton } from "../../../components/Elements/Buttons/ConfigButton";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { ShareButton } from "../../../components/Elements/Buttons/ShareButton";

export const SpotDetail = ({ spotId, selectedSpot, setSelectedSpot, handleVideoClick, handleClose }) => {
  const { spots } = useSpotsContext();
  const { currentUser, userId } = useFirebaseAuth();
  const [ editing, setEditing ] = useState(false);

  useEffect(() => {
    if (spots) {
      const spot = spots.find(spot => parseInt(spot.id) === parseInt(spotId));
      setSelectedSpot(spot);
    }
  }, [spotId, spots, currentUser]);

  if (!selectedSpot) {
    return <div></div>;
  }

  return (
    <Box >
      {selectedSpot && !editing ?
        <Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            sx={{px: 2, mt: 2}}
          >
            <Box >
              <Button
                component={Link}
                to={`/users/${selectedSpot.user.id}`}
                style={{color: "inherit", textDecoration: "none", display: "flex", flexDirection: "row"}}
                sx={{mb: 2}}
              >
                <Avatar src={selectedSpot.user.avatar} sx={{mr: 2}} ></Avatar>
                <Typography fontSize="20px" >{selectedSpot.user.name}</Typography>
              </Button>
              <Typography fontSize="20px" fontWeight="bold" >{selectedSpot.name}</Typography>
            </Box>
          { userId === selectedSpot.user.id &&
            <ConfigButton
              currentUser={currentUser}
              selectedSpot={selectedSpot}
              setEditing={setEditing}
              handleModalClose={handleClose}
            />
          }
          </Box>
          <Box >
            <Button onClick={handleVideoClick}>
              <img src={selectedSpot.videos[0].thumbnail_url} />
            </Button>
          </Box>
          <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
            <Box sx={{display: "flex", justifyContent: "left", alignItems: "center", width: "100%"}}>
              <IconButton disabled sx={{mx: 2}} ><ChatBubbleIcon color={"#c2c2c2"} /></IconButton>
              <LikeButton
                savedLikes={selectedSpot.likes}
                selectedSpot={selectedSpot}
              />
            </Box>
            <ShareButton sx={{mx: 2}} url={`https://twitter.com/share?url=${process.env.REACT_APP_PUBLIC_URL}spots/${parseInt(selectedSpot.id)} (※PC💻環境より閲覧してください)&text=【BackHacker.】で${selectedSpot.name}を見に行かない？🌎%0a%0a`}  />
          </Box>
          <Box sx={{px: 2, mt: 2}}>
            <Typography >{selectedSpot.description}</Typography>
          </Box>
        </Box>
      :
        <EditSpot spot={selectedSpot} setEditing={setEditing} title={"スポット編集"} />
      }
    </Box>
  )
}