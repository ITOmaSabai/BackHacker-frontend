import React from 'react';
import { Box, Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const VideoModal = ({  open, setOpen, selectedSpot }) => {
  const handleClose = () => {
    setOpen(false);
  }

  if (!selectedSpot) return <></>;

  return (
    <div>
      <Dialog
        PaperProps={{sx: {maxHeight: "90vh"}}}
        maxWidth={'xl'}
        fullWidth
        onClose={handleClose}
        open={open}
      >
        <Box sx={{display: "flex", justifyContent: "right"}}>
          <IconButton onClick={handleClose}>
            <CloseIcon color='primary' />
          </IconButton>
        </Box>
        <DialogContent
          sx={{
            height: { xs: "50vh", sm: "90vh", md: "110vh" },
            width: { xs: "100%", sm: "100%" },
            p: 0,
            m: 0
          }}
        >
          {selectedSpot.videos && selectedSpot.videos.length > 0 && (
            selectedSpot.videos.map((video) => (
              <Box sx={{height: "90%", width: "100%", m: 0, py: 1}} textAlign={"center"}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtube_video_id}`}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  width="100%"
                  height="100%"
                >
                </iframe>
              </Box>
            ))
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}