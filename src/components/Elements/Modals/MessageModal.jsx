import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ReplayIcon from '@mui/icons-material/Replay';
import { SignInButton } from '../../../features/auth/components/SignInButton';
import { WithdrawalButton } from '../../../features/users/components/WithdrawalButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: "80%",
    sm: 400
  },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  textAlign: "center"
};

export default function MessageModal({open, setOpen, title, body, icon, button}) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  }
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" variant='h3' sx={{ mt: 2 }}>
            {icon}
          </Typography>
          <Typography sx={{pt: 2}}>{body}</Typography>
          <Box sx={{pt: 2}} textAlign={"center"}>
            {buttonType === "login" && <SignInButton text={"ログイン"} variant={"contained"} color={"info"} handleClose={handleClose} />}
            {buttonType === "close" && <Button variant="contained" color="info" onClick={handleClose}><ReplayIcon />別の場所を投稿する</Button>}
            {buttonType === "withdrawal" &&
              <Box textAlign="center">
                <Button variant="text" sx={{mr: 2, fontWeight: "normal"}} onClick={handleClose}>戻る</Button>
                <WithdrawalButton />
                <Box sx={{pt: 2}} textAlign="left">
                  <Typography fontSize="12px">
                    ※「退会する」をクリックするとログイン画面が表示されます。
                  </Typography>
                  <Typography fontSize="12px">
                    ログインすると、退会処理が完了します。
                  </Typography>
                </Box>
              </Box>
            }
          </Box>
        </Box>
      </Modal>
    </div>
  );
}