import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ClickedLikeIcon } from "../../../features/likes/components/ClickedLikeIcon";

export const LikeButton = ({ savedLikes, currentUser }) => {
  const [ likedCount, setLikedCount ] = useState(0);
  const [ likeId, setLikeId ] = useState();
  const [ on, setOn ] = useState(false);

  useEffect(() => {
    if (savedLikes) {
      setLikedCount(savedLikes.length);
    }
  }, [savedLikes])

  useEffect(() => {
    if (currentUser && savedLikes) {
      const likeByCurrentUser = savedLikes.find(like => like.user_id === currentUser.id);
      if (likeByCurrentUser && likeByCurrentUser !== null) {
        setLikeId(likeByCurrentUser.id);
        setOn(true);
      } else {
        setOn(false);
      }
    } else {
      setOn(false);
    }
  }, [currentUser])


  return (
    <>
      <Button  sx={{height: "30px", width: "10px", pl: 4}} disableRipple>
        <ClickedLikeIcon on={on}/>
      </Button>
      <Typography >{likedCount}</Typography>
    </>
  )
}