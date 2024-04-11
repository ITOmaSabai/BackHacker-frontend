import { Avatar, Box, Typography } from "@mui/material"
import { useSpotsContext } from "../../../contexts/SpotsContext"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";
import Spinner from "../../../components/Elements/Spinner/Spinner";
import { LikeButton } from "../../../components/Elements/Buttons/LikeButton";
import { DeleteButton } from "../../../components/Elements/Buttons/DeleteButton";

export const SpotDetail = ({ spotId }) => {
  const { spots } = useSpotsContext();
  const [ selectedSpot, setSelectedSpot ] = useState();
  const { currentUser } = useFirebaseAuth();

  useEffect(() => {
    if (spots) {
      const spot = spots.find(spot => parseInt(spot.id) === parseInt(spotId));
      setSelectedSpot(spot);
    }
  }, [spotId, spots, currentUser]);

  if (!selectedSpot || !currentUser) {
    return <div><Spinner /></div>;
  }

  return (
    <Box >
      {selectedSpot &&
        <>
          <Link
            to={`/users/${selectedSpot.user.id}`}
            style={{color: "inherit", textDecoration: "none"}}
          >
            <Avatar src={selectedSpot.user.avatar} sx={{mr: 2}} ></Avatar>
            <Typography >{selectedSpot.user.name}</Typography>
          </Link>
          <Typography >{selectedSpot.name}</Typography>
          <DeleteButton currentUser={currentUser} spot={selectedSpot} />
          {selectedSpot.videos && selectedSpot.videos.length > 0 && (
            selectedSpot.videos.map((video) => (
              <iframe src={`https://www.youtube.com/embed/${video.youtube_video_id}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            ))
          )}
          <LikeButton
            savedLikes={selectedSpot.likes}
            selectedSpot={selectedSpot}
          />
        </>
      }
    </Box>
  )
}