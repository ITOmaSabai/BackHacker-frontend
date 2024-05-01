import React, { useState } from 'react';
import { Box, Dialog, DialogContent, Typography } from '@mui/material';
import { CommentIndex } from '../../../features/comments/components/CommentIndex';
import { CreateComment } from '../../../features/comments/components/CreateComment';

export default function CommentModal({ open, setOpen, spotId }) {
  const [ isCommentPosted, setIsCommentPosted ] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setIsCommentPosted(false);
  }

  return (
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <Box sx={{textAlign: "center", py: 2}} >
          <Typography >コメント</Typography>
        </Box>
        <DialogContent sx={{py: 0}} >
          <CommentIndex spotId={spotId} isCommentPosted={isCommentPosted} />
        </DialogContent>
        <CreateComment spotId={spotId} setIsCommentPosted={setIsCommentPosted} setOpen={setOpen} />
      </Dialog>
  );
}