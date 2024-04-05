import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import RoomTwoToneIcon from '@mui/icons-material/RoomTwoTone';


const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '40%',
  textAlign: 'center'
}
export const CreateSpot = () => {
  const [ spotName, setSpotName ] = useState();
  const [ spotDescription, setSpotDescription ] = useState();

  const handleSpotPost = (e) => {
    e.preventDefault();

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
          value={spotName}
          onChange={(e) => setSpotName(e.target.value)}
        />
        <TextField
          id="outlined-multiline-static"
          label="説明"
          fullWidth
          multiline
          rows={2}
          color='info'
          placeholder="思い出や感想をシェアしましょう"
          margin="normal"
          name='description'
          value={spotDescription}
          onChange={(e) => setSpotDescription(e.target.value)}
        />
        <Box >
          <Button variant='text' >キャンセル</Button>
          <Button
            type='submit'
            color='success'
            variant='contained'
            display={"flex"}
            alignItems={"center"}
            sx={{width: "150px"}}
          >
            投稿する
          </Button>
        </Box>
      </Box>
    </form>
  )
}