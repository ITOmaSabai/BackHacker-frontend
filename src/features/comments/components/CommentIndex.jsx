import { Avatar, Box, Typography } from "@mui/material"
import { getComments } from "../api/getComments";
import { useEffect, useState } from "react";

export const CommentIndex = ({ spotId }) => {
  const [ fetchedComments, setFetchedComments ] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getComments();
        console.log("ながさ", fetchedData.length);
        if (fetchedData === null) {
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
  }, [])

  console.log("コメントの中身", fetchedComments)

  return (
    <Box sx={{mt: 4, px: 2}} >
      <Box sx={{textAlign: "center", pb: 1}} >
        <Typography >コメント</Typography>
      </Box>
      {fetchedComments && fetchedComments.length > 0 ?
        <>
          {fetchedComments.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map((comment) => (
            <Box key={comment.id} sx={{py: 1, px: 1}}>
              <Box sx={{display: "flex", flexDirection: "row", alignItems: "flex-end", gap: 2}} >
                <Avatar src={comment.user.avatar} />
                <Typography fontWeight="bold" >{comment.user.name}</Typography>
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
      }
    </Box>
  )
}