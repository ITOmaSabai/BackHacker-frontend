import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { SignInButton } from '../../../features/auth/components/SignInButton';
import { ShareButton } from '../Buttons/ShareButton';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: "center"
};

export default function SpotModal({open, setOpen, spot, setLatLng}) {
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const buttonType = spot.button;

  const handleNextPost = () => {
    setOpen(false);
    setLatLng("");
  }

  const handleSpotDetail = () => {
    setOpen(false);
    setLatLng("");
    navigate(`/spots/${parseInt(spot.id)}`);
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {spot &&
          <Box sx={style}>
            {buttonType === "close" && <IconButton onClick={handleClose}><CloseIcon variant={"contained"} color={"info"} /></IconButton>}
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {spot.title}
            </Typography>
            <img src={spot.url} />
            <Typography sx={{pt: 2}}>{spot.body}</Typography>
            <Box sx={{pt: 2, display: "flex", flexDirection: "column", alignItems: "center"}} textAlign={"center"}>
              <Button onClick={handleNextPost} text={"ログイン"} sx={{width: "40%", my: 1}} variant={"outlined"} color={"info"} >続けて投稿する</Button>
              <Button onClick={handleSpotDetail} text={"ログイン"} sx={{width: "40%", my: 1}} variant={"contained"} color={"info"}  >投稿を確認する</Button>
              <ShareButton />
            </Box>
          </Box>
        }
      </Modal>
    </div>
  );
}