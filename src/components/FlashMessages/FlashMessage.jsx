import React, { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import { Alert } from '@mui/material';
import { useFlashMessage } from '../../contexts/FlashMessageContext';

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function FlashMessage() {
  const [state, setState] = useState({
    open: true,
    Transition: Fade,
  });
  const { message, isSuccessMessage } = useFlashMessage();

  useEffect(() => {
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

  if (message) {
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
          {isSuccessMessage ?
          <Alert
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
          >
            {message}
          </Alert>
          :
          <Alert
            severity="error"
            variant="filled"
            sx={{ width: '100%' }}
          >
            {message}
          </Alert>
          }
        </Snackbar>
      </div>
    );
  }
}