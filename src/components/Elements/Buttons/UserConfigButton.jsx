import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Box, IconButton, Typography } from '@mui/material';
import { LogOutButton } from '../../../features/auth/components/LogOutButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import WarningIcon from '@mui/icons-material/Warning';
import MessageModal from '../Modals/MessageModal';

export const UserConfigButton = ({ setEditing }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [ modalOpen, setModalOpen ] = useState(false);

  const menuOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = async () => {
    if (modalOpen) return;

    setAnchorEl(null);
  };

  const handleEditButtonClicked = () => {
    setAnchorEl(null);
    setEditing(true);
  };

  const handleWithdrawalClick = () => {
    setModalOpen(true);
  }

  const modalInfo = {
    body: "これまで投稿したスポット、いいね、コメントはすべて削除されます。退会しますか？",
    button: "withdrawal"
  };

  return (
    <div>
      <MessageModal
        open={modalOpen}
        setOpen={setModalOpen}
        title={modalInfo.title}
        body={modalInfo.body}
        icon={modalInfo.icon}
        button={modalInfo.button}
      />
      <IconButton
        id="fade-button"
        aria-controls={menuOpen ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={menuOpen ? 'true' : undefined}
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
        open={menuOpen}
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
        <MenuItem onClick={handleWithdrawalClick} >
          <Box
            sx={{p: 0, m: 0}}
            display={"flex"}
            flexDirection={"row"}
          >
            <WarningIcon fontSize="small" sx={{mr: 1}} color='error' />
            <Typography color='error' >
              退会する
            </Typography>
          </Box>
        </MenuItem>
      </Menu>
    </div>
  );
}