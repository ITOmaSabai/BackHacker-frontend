import React, { useState } from 'react';
import { Box, Button, Dialog, DialogContent, IconButton, Typography } from '@mui/material';
import { SpotDetail } from '../../../features/spots/components/SpotDetail';
import { useNavigate } from 'react-router-dom';
import { VideoModal } from './VideoModal';

export default function SpotDetailModal({ spotId, open, setOpen }) {
  const navigate = useNavigate();
  const [ videoModalOpen, setVideoModalOpen ] = useState(false);
  const [ selectedSpot, setSelectedSpot ] = useState();

  const handleClose = () => {
    setOpen(false);
    navigate("/map");
  };

  const handleVideoClick = () => {
    setVideoModalOpen(true);
  };

  return (
    <div>
      <Dialog
        PaperProps={{sx: {maxHeight: "90vh", width: "500px"}}}
        onClose={handleClose}
        open={open}
      >
        <DialogContent
          sx={{
            height: "100%",
            p: { xs: 1, sm: 0 },
            pb: { xs: 2, sm: 3 },
            m: 0
          }}
        >
          <SpotDetail
            spotId={spotId}
            selectedSpot={selectedSpot}
            setSelectedSpot={setSelectedSpot}
            handleVideoClick={handleVideoClick}
            handleClose={handleClose}
          />
        </DialogContent>
          <Box display="flex" justifyContent="center" sx={{pb: 1}} >
            <Button onClick={handleClose} >
              <Typography color="gray" >閉じる</Typography>
            </Button>
          </Box>
      </Dialog>
      <VideoModal
        open={videoModalOpen}
        setOpen={setVideoModalOpen}
        selectedSpot={selectedSpot}
      />
    </div>
  );
}