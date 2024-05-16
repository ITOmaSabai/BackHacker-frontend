import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { SignInButton } from '../../features/auth/components/SignInButton';
import { useFirebaseAuth } from '../../hooks/useFirebaseAuth';
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Tooltip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { currentUser, userId, loading } = useFirebaseAuth();
  const navigate = useNavigate();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  // Mobile画面でのメニュー
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleProfileOpen = () => {
    handleMenuClose();
    navigate("/profile");
  }

  const handleNavigate = () => {
    handleMenuClose();
    navigate("/");
  }

  const menuId = 'primary-search-account-menu';

  // ヘッダー右側のアイコン部分
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {currentUser && currentUser !== null &&
        <>
          <MenuItem onClick={handleProfileOpen}>
            <AccountCircle sx={{pr :1}}/>マイページ
          </MenuItem>
          <MenuItem onClick={handleNavigate}>
            <HomeIcon sx={{pr :1}}/>トップ
          </MenuItem>
        </>
      }
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {currentUser && currentUser !== null ? (
        <div>
          <MenuItem>
            <span>
              <Tooltip title="通知(作成中)" >
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                  disabled
                >
                  {/* <Badge badgeContent={17} color="error"> */}
                    <NotificationsIcon />
                  {/* </Badge> */}
                </IconButton>
              </Tooltip>
            </span>
            <Typography >通知</Typography>
          </MenuItem>
          <MenuItem onClick={handleProfileOpen}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Typography >マイページ</Typography>
          </MenuItem>
          <MenuItem onClick={handleNavigate}>
            <IconButton
              size="large"
              color="inherit"
            >
              <HomeIcon />
            </IconButton>
            <Typography >トップ</Typography>
          </MenuItem>
          </div>
      ) : (
        <MenuItem>
          <Typography ><SignInButton text={"ログイン"} color={"info"} /></Typography>
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ pl: {xs: 0, sm: 1, md: 5} }}>
        <Toolbar>
          <Link
              to={`${currentUser ? "/map" : "/"}`}
              style={{color: "inherit", textDecoration: "none"}}
            >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'block', sm: 'block' } }}
            >
              BackHacker.
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            { loading ? (
              <></>
            ) : (
              <>
                {currentUser && currentUser !== null ? (
                  <>
                    <Tooltip title="通知(作成中)" >
                      <span>
                        <IconButton
                          size="large"
                          aria-label="show 17 new notifications"
                          color="inherit"
                          disabled
                        >
                        {/* <Badge badgeContent={17} color="error"> */}
                          <NotificationsIcon />
                        {/* </Badge> */}
                        </IconButton>
                      </span>
                    </Tooltip>
                    <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                    >
                      <Avatar
                        src={`${currentUser.photoURL}`}
                        alt={`${currentUser.displayName}`}
                        sx={{width: "25px", height: "25px"}}
                      />
                    </IconButton>
                  </>
                ) : (
                  // ログイン中でない時は、ログインボタンを表示する
                  <SignInButton text={"ログイン"} variant={"contained"} color={"info"} />
                )}
              </>
            )}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}