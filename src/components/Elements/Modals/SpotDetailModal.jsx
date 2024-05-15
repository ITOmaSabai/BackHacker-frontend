import React, { useEffect, useState } from 'react';
import { Box, Button, Dialog, DialogContent, Typography } from '@mui/material';
import { SpotDetail } from '../../../features/spots/components/SpotDetail';
import { useNavigate, useParams } from 'react-router-dom';
import { VideoModal } from './VideoModal';
import { useSpotsContext } from '../../../contexts/SpotsContext';

export default function SpotDetailModal({ open, setOpen }) {
  const navigate = useNavigate();
  const { spots } = useSpotsContext();
  const { spotId } = useParams();
  const [ videoModalOpen, setVideoModalOpen ] = useState(false);
  const [ selectedSpot, setSelectedSpot ] = useState();

  const handleClose = () => {
    setOpen(false);
    navigate("/map");
  };

  const handleVideoClick = () => {
    setVideoModalOpen(true);
  };

  useEffect(() => {
    if (spotId) {
      setOpen(true);
    }
  }, [spotId]);

  useEffect(() => {
    if (spots && spotId) {
      const spot = spots.find(spot => parseInt(spot.id) === parseInt(spotId));
      setSelectedSpot(spot);
    }
  }, [spotId, spots]);

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