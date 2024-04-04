import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import { useLocation } from 'react-router-dom';
import { Alert } from '@mui/material';


function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function TransitionsSnackbar() {
  const [state, setState] = useState({
    open: true,
    Transition: Fade,
  });

  const location = useLocation();
  const message = location.state?.message;

  useState(() => {
    if (message) {
      setState({
        open: true,
        Transition: SlideTransition,
      })
    }
  }, [message])

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <div>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message={message}
        key={state.Transition.name}
        autoHideDuration={1200}
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}