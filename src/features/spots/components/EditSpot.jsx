import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import RoomTwoToneIcon from '@mui/icons-material/RoomTwoTone';
import { updateSpot } from "../api/updateSpot";
import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";
import Switch from '@mui/material/Switch';
import Spinner from "../../../components/Elements/Spinner/Spinner";
import { useSpotsContext } from "../../../contexts/SpotsContext";
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

export const EditSpot = ({ spot, setEditing, title }) => {
  const { currentUser } = useFirebaseAuth();
  const { loadSpots } = useSpotsContext();
  const { setMessage, setIsSuccessMessage } = useFlashMessage();
  const [ spotName, setSpotName ] = useState();
  const [ spotDescription, setSpotDescription ] = useState();

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  if (!currentUser || !spot) return <div><Spinner /></div>;

  const spotInfo = {
    id: spot.id,
    name: spotName,
    description: spotDescription,
  }

  const handleSpotUpdate = async (e) => {
    try {
      e.preventDefault();
      await updateSpot(currentUser, spotInfo);
      await loadSpots();
      setIsSuccessMessage(true);
      setMessage("編集が完了しました");
      setEditing(false);
    } catch (error) {
      setMessage(error.message);
    }
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