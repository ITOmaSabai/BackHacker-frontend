import React from 'react';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import { SpotDetail } from '../../../features/spots/components/SpotDetail';
import { useNavigate } from 'react-router-dom';

export default function SpotDetailModal({ spotId, open, setOpen }) {
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    navigate("/map");
  }

  return (
    <div>
      <Dialog
        PaperProps={{sx: {maxHeight: "90vh", width: "500px"}}}
        onClose={handleClose}
        open={open}
      >
        <DialogContent sx={{height: "100vh", p: 0, m: 0}}>
          <SpotDetail spotId={spotId} />
        </DialogContent>
      </Dialog>
    </div>
  );
}