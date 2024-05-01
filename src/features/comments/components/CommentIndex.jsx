import { Avatar, Box, Button, Typography } from "@mui/material"
import { getComments } from "../api/getComments";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CommentIndex = ({ spotId, isCommentPosted }) => {
  const [ fetchedComments, setFetchedComments ] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getComments();
        if (fetchedData !== null) {
          const commentsForSpot = fetchedData.filter(data => parseInt(data.spot_id) === parseInt(spotId));
          setFetchedComments(commentsForSpot);
        } else {
          setFetchedComments(null);
        }
      } catch (error) {
        console.error('コメントの取得に失敗しました', error);
      }
    }
    fetchData();
  }, [isCommentPosted])

  return (
    <Box sx={{px: 2}} >
      {fetchedComments ?
        fetchedComments.length > 0 ?
          <>
            {fetchedComments.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map((comment) => (
              <Box key={comment.id} sx={{pb: 1, px: 1}}>
                <Box sx={{display: "flex", flexDirection: "row", alignItems: "flex-end", gap: 2}} >
                  <Button component={Link} to={`/users/${comment.user.id}`} sx={{alignItems: "flex-end",  gap: 2, pb: 0}} >
                    <Avatar src={comment.user.avatar} />
                    <Typography fontWeight="bold" >{comment.user.name}</Typography>
                  </Button>
                  <Typography fontSize="14px" >{new Date(comment.created_at).toLocaleDateString()}</Typography>
                </Box>
                <Box sx={{display: "flex", justifyContent: "left", py: 1, px: 3}} >
                  <Typography >{comment.content}</Typography>
                </Box>
              </Box>
            ))
            }
          </>
        :
          <Box sx={{textAlign: "center", pt: 1}} >
            <Typography >まだコメントはありません</Typography>
          </Box>
      :
        <></>
      }
    </Box>
  )
}