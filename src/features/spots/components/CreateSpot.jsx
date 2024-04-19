import { Alert, Box, Button, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import RoomTwoToneIcon from '@mui/icons-material/RoomTwoTone';
import { createSpot } from "../api/createSpot";
import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";
import Switch from '@mui/material/Switch';
import { ReverseGeocode } from "./ReverseGeocode";
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

export const CreateSpot = ({ latLng, setOpen, setCreatedSpot }) => {
  const { currentUser } = useFirebaseAuth();
  const { setMessage, setIsSuccessMessage } = useFlashMessage();
  const [ spotName, setSpotName ] = useState();
  const [ spotDescription, setSpotDescription ] = useState("");
  const [ isAutoFetchEnabled, setIsAutoFetchEnabled ] = useState(true);
  const [ isDisabled, setIsDisabled] = useState(true);

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  useEffect(() => {
    if (latLng) {
      setIsDisabled(false);
    }
  }, [latLng])

  const handleSpotPost = async (e) => {
    e.preventDefault();
    const address = await ReverseGeocode(latLng);
    const res = await createSpot(currentUser, spotName, spotDescription, latLng, address);
    console.log(res);
    if (res.statusText === "Created") {
      setIsSuccessMessage(true);
      setMessage("登録が完了しました");
      setOpen(true);
      setCreatedSpot({
        title: "新規投稿が完了しました🎉",
        body: res.data.spot.name,
        url: res.data.videos[0].snippet.thumbnails.medium.url,
        id: res.data.spot.id
      });
      handleCancelClick();
    }
  }

  const handleCancelClick = () => {
    setSpotName("");
    setSpotDescription("");
  }

  return (
    latLng ?
      <Box style={style} >
    <form onSubmit={handleSpotPost} >
        <Typography variant='h5' fontSize={"24px"}>
          <RoomTwoToneIcon />スポット新規投稿
        </Typography>
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
          disabled={isDisabled}
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
          placeholder="思い出や感想を入力してください"
          margin="normal"
          name='description'
          disabled={isDisabled}
          value={spotDescription}
          onChange={(e) => setSpotDescription(e.target.value)}
        />
        <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center", justifyContent: "center", pb: 1, pt: 1}}>
          <Typography>動画を自動で取得する</Typography>
          <Switch
            {...label}
            defaultChecked
            disabled
            checked={isAutoFetchEnabled}
            onChange={() => setIsAutoFetchEnabled(!isAutoFetchEnabled)}
          />
        </Box>
        <Box sx={{pb: 3}}>
          {isAutoFetchEnabled ? (
            <>
              {/* <Typography fontSize={"14px"} >オススメ！ピンの周辺の動画を</Typography>
              <Typography fontSize={"14px"} >自動で取得します(1回/日 限定)</Typography> */}
            </>
          ) : (
            <>
              <TextField label="YouTube動画URLを入力" ></TextField>
              <Typography >https://www.youtube.com/</Typography>
            </>
          )}
        </Box>
        <Box >
          <>
            <Button variant='text' onClick={handleCancelClick} >キャンセル</Button>
            <Button
              type='submit'
              color='success'
              variant='contained'
              display={"flex"}
              sx={{width: "150px"}}
            >
              投稿する
            </Button>
          </>

        </Box>
    </form>
      </Box>
    :
      <Box style={style} >
        <Typography variant='h5' fontSize={"24px"}>
          <RoomTwoToneIcon />スポット新規投稿
        </Typography>
        <Alert severity="info" variant="filled" sx={{mt: 5}}>地図上をクリックして、投稿する地点を指定してください</Alert>
      </Box>
  )
}