import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import RoomTwoToneIcon from '@mui/icons-material/RoomTwoTone';
import { createSpot } from "../api/createSpot";
import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";

const style = {
  display: 'flex',
  flexDirection: 'column',
  width: '40%',
  textAlign: 'center'
}
export const CreateSpot = () => {
  const [ spotName, setSpotName ] = useState();
  const [ spotDescription, setSpotDescription ] = useState("");
  const { currentUser } = useFirebaseAuth();

  const handleSpotPost = (e) => {
    e.preventDefault();
    createSpot(currentUser, spotName, spotDescription);
  }

  return (
    <form onSubmit={handleSpotPost} >
      <Box style={style} >
        <Typography variant='h5' fontSize={"24px"}><RoomTwoToneIcon />スポット新規投稿</Typography>
        <TextField
          id="spotName"
          label="スポット名"
          fullWidth
          variant="outlined"
          color="info"
          margin="normal"
          helperText="※必須項目です"
          placeholder="表示されるスポット名"
          name="spotName"
          // value={spotName}
          onChange={(e) => setSpotName(e.target.value)}
        />
        <TextField
          id="outlined-multiline-static"
          label="説明"
          fullWidth
          multiline
          rows={2}
          color='info'
          placeholder="思い出や感想を入力してください"
          margin="normal"
          name='description'
          // value={spotDescription}
          onChange={(e) => setSpotDescription(e.target.value)}
        />
        <Box >
          <Button variant='text' >キャンセル</Button>
          <Button
            type='submit'
            color='success'
            variant='contained'
            display={"flex"}
            sx={{width: "150px"}}
          >
            投稿する
          </Button>
        </Box>
      </Box>
    </form>
  )
}