import { Box, Button, TextField, Typography } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";

const style = {
  display: 'flex',
  flexDirection: 'column',
  height: "100%",
  width: '90%',
  textAlign: 'center',
  alignItems: "center",
  margin: "0 auto",
  paddingTop: "30px"
}

export const CreateComment = () => {
  const [ inputComment, setInputComment ] = useState();

  const handleCommentCteate = (e) => {
    e.preventDefault();

  }

  const handleCancelClick = () => {
    setInputComment("");
  }

  return (
    <Box style={style} >
      <form onSubmit={handleCommentCteate} >
        <Typography variant='h5' fontSize={"24px"}>
        </Typography>
        <TextField
          id="comment"
          label="コメント"
          fullWidth
          variant="outlined"
          color="info"
          margin="normal"
          placeholder="コメントを入力"
          name="comment"
          value={inputComment}
          onChange={(e) => setInputComment(e.target.value)}
        />
        <Button variant='text' onClick={handleCancelClick} >キャンセル</Button>
        <Button
          type='submit'
          color='info'
          variant='contained'
          display={"flex"}
          sx={{width: "150px"}}
        >
          投稿
        </Button>
      </form>
    </Box>
  )
}