import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function FloatingButton({ text, onClick }) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 }, position: 'fixed', bottom: 16, left: '50%', transform: 'translateX(-50%)' }} onClick={onClick} >
      <Fab variant="extended" color="secondary">
        {text}
        <AddCircleIcon sx={{ ml: 1 }} />
      </Fab>
    </Box>
  );
}