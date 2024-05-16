import { Avatar, Box, Button, IconButton, Tooltip, Typography } from "@mui/material"
import { useSpotsContext } from "../../../contexts/SpotsContext"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";
import { LikeButton } from "../../../components/Elements/Buttons/LikeButton";
import { EditSpot } from "./EditSpot";
import { ConfigButton } from "../../../components/Elements/Buttons/ConfigButton";
import { ShareButton } from "../../../components/Elements/Buttons/ShareButton";
import CommentModal from "../../../components/Elements/Modals/CommentModal";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export const SpotDetail = ({ spotId, selectedSpot, setSelectedSpot, handleVideoClick, handleClose }) => {
  const { spots } = useSpotsContext();
  const { currentUser, userId } = useFirebaseAuth();
  const [ editing, setEditing ] = useState(false);
  const [ commentModalOpen, setCommentModalOpen ] = useState(false);

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
            sx={{px: { xs: 0, sm: 2 }, mt: 2}}
          >
            <Box width="100%">
              <Box display="flex" flexDirection="row" justifyContent="space-between" >
                <Button
                  component={Link}
                  to={userId === selectedSpot.user.id ? "/profile" : `/users/${selectedSpot.user.id}`}
                  sx={{
                    color: "inherit",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "left",
                    mb: { xs: 1, sm: 2 },
                    width: "100%"
                  }}
                >
                  <Avatar
                    src={selectedSpot.user.avatar}
                    sx={{
                      mr: 2,
                      width: { xs: 24, sm: 40 },
                      height: { xs: 24, sm: 40 }
                    }}
                  >
                  </Avatar>
                  <Typography fontSize={{ xs: "16px", sm: "20px" }} >{selectedSpot.user.name}</Typography>
                </Button>
                { userId === selectedSpot.user.id &&
                  <ConfigButton
                    currentUser={currentUser}
                    selectedSpot={selectedSpot}
                    setEditing={setEditing}
                    handleModalClose={handleClose}
                  />
                }
              </Box>
              <Typography
                fontSize={{ xs: "16px", sm: "20px" }}
                fontWeight="bold"
                sx={{px: { xs: 1, sm: 0 }}}
              >
                {selectedSpot.name}
              </Typography>
            </Box>
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
              <Tooltip title="コメント">
                <span>
                  <IconButton sx={{ml: 1, mr: 2}} onClick={() => setCommentModalOpen(true)} ><ChatBubbleOutlineIcon /></IconButton>
                </span>
              </Tooltip>
              <LikeButton
                savedLikes={selectedSpot.likes}
                selectedSpot={selectedSpot}
              />
            </Box>
            <ShareButton
              sx={{mx: 2}}
              url={selectedSpot.name && selectedSpot.name.trim() !== ''
                ? `https://twitter.com/intent/tweet?url=${process.env.REACT_APP_PUBLIC_URL}spots/${parseInt(selectedSpot.id)}&text=バーチャル旅行アプリ【BackHacker.】で「${selectedSpot.name}」に行ってみよう！🌎%0a%0a`
                : `https://twitter.com/intent/tweet?url=${process.env.REACT_APP_PUBLIC_URL}spots/${parseInt(selectedSpot.id)}&text=バーチャル旅行アプリ【BackHacker.】で旅行気分を味わってみよう！🌎%0a%0a`
              }
            />
          </Box>
          <Box sx={{px: 2, mt: 2}}>
            <Typography >{selectedSpot.description}</Typography>
          </Box>
          <CommentModal open={commentModalOpen} setOpen={setCommentModalOpen} spotId={spotId} />
        </Box>
      :
        <EditSpot spot={selectedSpot} setEditing={setEditing} title={"スポット編集"} />
      }
    </Box>
  )
}