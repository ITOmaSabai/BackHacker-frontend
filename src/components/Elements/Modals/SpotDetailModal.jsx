import React, { useState } from 'react';
import { Dialog, DialogContent, IconButton } from '@mui/material';
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
        <DialogContent sx={{height: "100vh", p: 0, m: 0}}>
          <SpotDetail spotId={spotId} selectedSpot={selectedSpot} setSelectedSpot={setSelectedSpot} handleVideoClick={handleVideoClick} handleClose={handleClose} />
        </DialogContent>
      </Dialog>
      <VideoModal open={videoModalOpen} setOpen={setVideoModalOpen} selectedSpot={selectedSpot} />
    </div>
  );
}