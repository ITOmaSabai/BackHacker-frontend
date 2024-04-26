import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { LogOutButton } from '../../../features/auth/components/LogOutButton';
import { WithdrawalButton } from '../../../features/users/components/WithdrawalButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';

export const UserConfigButton = ({ setEditing }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditButtonClicked = () => {
    setAnchorEl(null);
    setEditing(true);
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
        <MenuItem onClick={handleEditButtonClicked} >
          <Box
            sx={{p: 0, m: 0}}
            display={"flex"}
            flexDirection={"row"}
          >
            <EditIcon fontSize="small" sx={{mr: 1}} />
            <Typography >
              編集
            </Typography>
          </Box>
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