import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import RoomTwoToneIcon from '@mui/icons-material/RoomTwoTone';
import { updateSpot } from "../api/updateSpot";
import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";
import Switch from '@mui/material/Switch';
import Spinner from "../../../components/Elements/Spinner/Spinner";
import { useSpotsContext } from "../../../contexts/SpotsContext";

const style = {
  display: 'flex',
  flexDirection: 'column',
  width: '90%',
  textAlign: 'center'
}
export const EditSpot = ({ spot, setEditing, title }) => {
  const { currentUser } = useFirebaseAuth();
  const { loadSpots } = useSpotsContext();
  const [ spotName, setSpotName ] = useState();
  const [ spotDescription, setSpotDescription ] = useState("");
  const [ isAutoFetchEnabled, setIsAutoFetchEnabled ] = useState(true);

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  if (!currentUser || !spot) return <div><Spinner /></div>;

  const spotInfo = {
    id: spot.id,
    name: spotName,
    description: spotDescription,
  }

  const handleSpotUpdate = async (e) => {
    e.preventDefault();
    await updateSpot(currentUser, spotInfo);
    await loadSpots();
    setEditing(false);
  }

  return (
    <form onSubmit={handleSpotUpdate} >
      <Box style={style} >
        <Typography variant='h5' fontSize={"24px"}><RoomTwoToneIcon />{title}</Typography>
        <TextField
          id="spotName"
          label="スポット名"
          fullWidth
          variant="outlined"
          color="info"
          margin="normal"
          helperText="※必須項目です"
          placeholder="表示されるスポット名"
          defaultValue={spot.name}
          name="spotName"
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
          defaultValue={spot.description}
          name='description'
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
              <Typography fontSize={"14px"} >オススメ！ピンの周辺の動画を</Typography>
              <Typography fontSize={"14px"} >自動で取得します(1回/日 限定)</Typography>
            </>
          ) : (
            <>
              <TextField label="YouTube動画URLを入力" ></TextField>
              <Typography >https://www.youtube.com/</Typography>
            </>
          )}
        </Box>
        <Box >
          <Button variant='text' onClick={() => setEditing(false)} >キャンセル</Button>
          <Button
            type='submit'
            color='success'
            variant='contained'
            display={"flex"}
            sx={{width: "150px"}}
          >
            保存する
          </Button>
        </Box>
      </Box>
    </form>
  )
}