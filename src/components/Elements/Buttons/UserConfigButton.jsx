import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Button, IconButton } from '@mui/material';
import { EditButton } from './EditButton';
import { LogOutButton } from '../../../features/auth/components/LogOutButton';
import { WithdrawalButton } from '../../../features/users/components/WithdrawalButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const UserConfigButton = ({ currentUser, selectedSpot, setEditing }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color='primary'
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose} >
          <Button disabled >
            <EditButton />
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose} >
          <LogOutButton />
        </MenuItem>
        <MenuItem onClick={handleClose} >
          <Button disabled >
            <WithdrawalButton />
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
}