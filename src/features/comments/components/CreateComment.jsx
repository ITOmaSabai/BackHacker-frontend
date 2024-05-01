import { Box, Button, TextField, Typography } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState } from "react";
import { createComment } from "../api/createComment";
import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";
import { useFlashMessage } from "../../../contexts/FlashMessageContext";

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

export const CreateComment = ({ spotId }) => {
  const { currentUser } = useFirebaseAuth();
  const { setMessage, setIsSuccessMessage } = useFlashMessage();
  const [ inputComment, setInputComment ] = useState();
  const [ isDisabled, setIsDisabled ] = useState(true);

  useEffect(() => {
    if(inputComment !== null && inputComment !== "" ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [inputComment])

  const handleCommentCteate = async (e) => {
    e.preventDefault();
    const result = await createComment(currentUser, spotId, inputComment);
    if (result.success) {
      setMessage("コメントしました");
      setIsSuccessMessage(true);
      setInputComment("");
    }
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
          disabled={isDisabled}
        >
          投稿
        </Button>
      </form>
    </Box>
  )
}