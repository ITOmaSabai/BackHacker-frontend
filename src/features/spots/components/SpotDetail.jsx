import { Avatar, Box, Typography } from "@mui/material"
import { useSpotsContext } from "../../../contexts/SpotsContext"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const SpotDetail = ({ spotId }) => {
  const { spots } = useSpotsContext();
  const [ selectedSpot, setSelectedSpot ] = useState();

  useEffect(() => {
      if (spots) {
      const spot = spots.find(spot => parseInt(spot.id) === parseInt(spotId));
      setSelectedSpot(spot);
    }
  }, [spotId, spots]);

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
        {selectedSpot.videos && selectedSpot.videos.length > 0 && (
          selectedSpot.videos.map((video) => (
            <iframe  src={`https://www.youtube.com/embed/${video.youtube_video_id}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          ))
        )}
      </>
      }
    </Box>
  )
}