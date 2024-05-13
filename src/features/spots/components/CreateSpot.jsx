import { Alert, Box, Button, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import RoomTwoToneIcon from '@mui/icons-material/RoomTwoTone';
import { createSpot } from "../api/createSpot";
import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";
import Switch from '@mui/material/Switch';
import { ReverseGeocode } from "./ReverseGeocode";
import { useFlashMessage } from "../../../contexts/FlashMessageContext";
import MessageModal from "../../../components/Elements/Modals/MessageModal";

const style = {
  display: 'flex',
  flexDirection: 'column',
  height: "100%",
  width: '90%',
  textAlign: 'center',
  alignItems: "center",
  margin: "0 auto"
}
const searchFailureModal = {
  title: "動画が見つかりませんでした...",
  body: "山、砂漠、海などは避け、都市部をクリックして再度試してみてください",
  icon: "😭",
  button: "close"
};

export const CreateSpot = ({ latLng, setLatLng, setOpen, setCreatedSpot }) => {
  const { currentUser } = useFirebaseAuth();
  const { setMessage, setIsSuccessMessage } = useFlashMessage();
  const [ spotName, setSpotName ] = useState("");
  const [ spotDescription, setSpotDescription ] = useState("");
  const [ isAutoFetchEnabled, setIsAutoFetchEnabled ] = useState(true);
  const [ isDisabled, setIsDisabled] = useState(true);
  const [ searchFailureModalOpen, setSearchFailureModalOpen ] = useState(false);

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  useEffect(() => {
    if (latLng) {
      setIsDisabled(false);
    }
  }, [latLng])

  const handleSpotPost = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    const address = await ReverseGeocode(latLng);

    if (address.address_components.length <= 1) {
      setMessage("投稿に失敗しました");
      setSearchFailureModalOpen(true);
      return;
    }

    setSearchFailureModalOpen(false);
    const result = await createSpot(currentUser, spotName, spotDescription, latLng, address);
    if (result.success) {
      setIsSuccessMessage(true);
      setMessage("登録が完了しました");
      setOpen(true);
      setIsDisabled(false);
      setCreatedSpot({
        title: "新規投稿が完了しました🎉",
        body: result.data.spot.name,
        url: result.data.videos[0].snippet.thumbnails.medium.url,
        id: result.data.spot.id
      });
      handleCancelClick();
    } else {
      setMessage(result.message);
    }
  }

  const handleCancelClick = () => {
    setSpotName("");
    setSpotDescription("");
    setLatLng("");
  }

  return (
    latLng ?
      <Box sx={style} >
        <MessageModal
          open={searchFailureModalOpen}
          setOpen={setSearchFailureModalOpen}
          title={searchFailureModal.title}
          body={searchFailureModal.body}
          icon={searchFailureModal.icon}
          button={"close"}
        />
        <form onSubmit={handleSpotPost} >
          <Typography variant='h5' fontSize={{xs: "16px", sm: "24px"}}>
            <RoomTwoToneIcon />スポット新規投稿
          </Typography>
          <TextField
            id="spotName"
            label="スポット名"
            fullWidth
            size="small"
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
            size="small"
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
          {/* <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center", justifyContent: "center", pb: 1, pt: 1}}>
            <Typography>動画を自動で取得する</Typography>
            <Switch
              {...label}
              defaultChecked
              disabled
              checked={isAutoFetchEnabled}
              onChange={() => setIsAutoFetchEnabled(!isAutoFetchEnabled)}
            />
          </Box> */}
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
          <Box sx={{pb: { xs: 3, sm: 0 }}} >
            <Button variant='text' onClick={handleCancelClick} >キャンセル</Button>
            <Button
              type='submit'
              color='success'
              variant='contained'
              display={"flex"}
              sx={{width: "150px"}}
              disabled={isDisabled}
            >
              投稿する
            </Button>
          </Box>
        </form>
      </Box>
    :
      <Box sx={style} >
        <Typography variant='h5' fontSize={{xs: "16px", sm: "24px"}} >
          <RoomTwoToneIcon />スポット新規投稿
        </Typography>
        <Alert
          severity="info"
          variant="filled"
          sx={{mt: { xs: 1, sm: 5} }}>
          地図上をクリックして、投稿する地点を指定してください
        </Alert>
      </Box>
  )
}