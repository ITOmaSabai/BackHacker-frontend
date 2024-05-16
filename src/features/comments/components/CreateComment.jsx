import { Alert, Box, Button, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { createComment } from "../api/createComment";
import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";
import { useFlashMessage } from "../../../contexts/FlashMessageContext";
import { SignInButton } from "../../auth/components/SignInButton";

const style = {
  display: 'flex',
  flexDirection: 'column',
  height: "100%",
  width: '90%',
  textAlign: 'center',
  alignItems: "center",
  margin: "0 auto",
  padding: "10px 0px 20px 0px"
}

export const CreateComment = ({ spotId, setIsCommentPosted, setOpen }) => {
  const { currentUser } = useFirebaseAuth();
  const { setMessage, setIsSuccessMessage } = useFlashMessage();
  const [ inputComment, setInputComment ] = useState(null);
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
      setIsCommentPosted(true);
    } else {
      setMessage(result.message);
    }
  }

  const handleCancelClick = () => {
    setInputComment("");
    setOpen(false);
  }

  const handleCommentInput = (e) => {
    setInputComment(e.target.value);
    setIsCommentPosted(false);
  }

  if (!currentUser) {
    return (
      <Box style={style} >
        <Alert severity="info">
          <Typography sx={{pb: 1}} fontSize={{xs: "14px"}} >
            コメントを投稿するにはログインしてください
          </Typography>
          <SignInButton text={"ログイン"} color={"info"} variant={"contained"} />
        </Alert>
      </Box>
    );
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
          onChange={handleCommentInput}
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