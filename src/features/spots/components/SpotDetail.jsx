import { Avatar, Box, Button, IconButton, Tooltip, Typography } from "@mui/material"
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
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "left",
                  mb: 2,
                  width: "100%"
                }}
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
          <Box
            sx={{
              position: 'relative',
              '&:hover': {
                '& img': {
                  filter: 'brightness(50%)',
                },
                '& .icon-overlay': {
                  visibility: 'visible',
                },
              },
            }}
          >
            <Button onClick={handleVideoClick}>
              <img src={selectedSpot.videos[0].thumbnail_url} alt="サムネイル" style={{ width: '100%', display: 'block' }} />
            </Button>
            <Box
              className="icon-overlay"
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                visibility: 'hidden',
              }}
            >
              <Button onClick={handleVideoClick} >
                <Typography fontSize="20px" fontWeight="bold" color="white" >Watch Videos</Typography>
              </Button>
            </Box>
          </Box>
          <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
            <Box sx={{display: "flex", justifyContent: "left", alignItems: "center", width: "100%"}}>
              <Tooltip title="コメントする(機能作成中)">
                <span>
                  <IconButton sx={{mx: 2}} disabled ><ChatBubbleIcon /></IconButton>
                </span>
              </Tooltip>
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