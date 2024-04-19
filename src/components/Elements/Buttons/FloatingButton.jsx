import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function FloatingButton({ text, onClick }) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }} onClick={onClick} >
      <Fab variant="extended" color="info">
        {text}
        <AddCircleIcon sx={{ ml: 1 }} />
      </Fab>
    </Box>
  );
}