import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { ShareButton } from '../Buttons/ShareButton';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: "100%",
    sm: "400px"
  },
  maxHeight: {
    xs: "80%",
  },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: {xs: 1, sm: 4},
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
    navigate(`/spots/${parseInt(spot.id)}`, { state: { open: true, spotId: spot.id }});
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
            <Typography
              id="modal-modal-title"
              fontSize={{xs: "16px", sm: "20px"}}
              fontWeight="bold"
              pb={1}
              component="h2"
            >
              {spot.title}
            </Typography>
            <Box display="flex" justifyContent="center" margin="auto" width={{xs: "70%", sm: "100%"}} >
              <img src={spot.url} style={{maxWidth: "80%", height: "auto"}} />
            </Box>
            <Typography sx={{pt: { xs: 1, sm: 2 }}}>{spot.body}</Typography>

            {/* スマートフォンサイズのボタン */}
            <Box
              sx={{
                // pt: 1,
                display: { xs: "flex", sm: "none" },
                flexDirection: "column",
                alignItems: "center"
              }}
              textAlign={"center"}
            >
              <Box
                sx={{
                  display: { xs: "flex", sm: "none" },
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
              <Button
                onClick={handleNextPost}
                text={"ログイン"}
                sx={{width: { xs: "80%", sm: "50%" }, my: 1, mr: 1}}
                variant={"outlined"}
                color={"info"}
              >
                続けて投稿する
              </Button>
              <Button
                onClick={handleSpotDetail}
                text={"ログイン"}
                sx={{width: { xs: "80%", sm: "50%" }, my: 1}}
                variant={"contained"}
                color={"info"}
              >
                投稿を確認する
              </Button>
              </Box>
            </Box>


            {/* タブレット以上のサイズのボタン */}
            <Box
              sx={{
                pt: 2,
                display: { xs: "none", sm: "flex" },
                flexDirection: "column",
                alignItems: "center"
              }}
              textAlign={"center"}
            >
              <Button
                onClick={handleNextPost}
                text={"ログイン"}
                sx={{width: { xs: "80%", sm: "50%" }, my: 1}}
                variant={"outlined"}
                color={"info"}
              >
                続けて投稿する
              </Button>
              <Button
                onClick={handleSpotDetail}
                text={"ログイン"}
                sx={{width: { xs: "80%", sm: "50%" }, my: 1}}
                variant={"contained"}
                color={"info"}
              >
                投稿を確認する
              </Button>
              <ShareButton
                url={spot.body && spot.body.trim() !== ''
                ? `https://twitter.com/intent/tweet?url=${process.env.REACT_APP_PUBLIC_URL}spots/${parseInt(spot.id)} &text=「${spot.body}」を投稿したよ！🎉 バーチャル旅行アプリ【BackHacker.】で見に行こう🌎%0a%0a`
                : `https://twitter.com/intent/tweet?url=${process.env.REACT_APP_PUBLIC_URL}spots/${parseInt(spot.id)} &text=バーチャル旅行アプリ【BackHacker.】でスポットを投稿したよ🎉 さっそく見に行ってみよう🌎%0a%0a`
              } />
            </Box>


          </Box>
        }
      </Modal>
    </div>
  );
}