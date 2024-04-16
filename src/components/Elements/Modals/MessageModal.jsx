import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { SignInButton } from '../../../features/auth/components/SignInButton';

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

export default function MessageModal({open, setOpen, title, body, icon, button}) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const buttonType = button;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {buttonType === "close" && <IconButton onClick={handleClose}><CloseIcon variant={"contained"} color={"info"} /></IconButton>}
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" variant='h3' sx={{ mt: 2 }}>
            {icon}
          </Typography>
          <Typography sx={{pt: 2}}>{body}</Typography>
          <Box sx={{pt: 2}} textAlign={"center"}>
            {buttonType === "login" && <SignInButton text={"ログイン"} variant={"contained"} color={"info"} />}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}