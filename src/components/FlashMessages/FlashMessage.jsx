import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';
import { useLocation } from 'react-router-dom';


function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

function GrowTransition(props) {
  return <Grow {...props} />;
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

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <div>
      {/* <Button onClick={handleClick(SlideTransition)}>Slide Transition</Button> */}
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message={message}
        key={state.Transition.name}
        autoHideDuration={1200}
      />
    </div>
  );
}