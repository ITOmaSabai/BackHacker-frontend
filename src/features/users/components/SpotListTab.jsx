import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SpotCard } from '../../spots/components/SpotCard';
import { useSpotsContext } from '../../../contexts/SpotsContext';
import Spinner from '../../../components/Elements/Spinner/Spinner';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 5, display: "flex", justifyContent: "center" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const SpotListTab = ({ userInfo }) => {
  const [value, setValue] = useState(0);
  const { spots } = useSpotsContext();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!userInfo) return <div><Spinner /></div>;

  const userPostedSpots = () => {
    return spots && spots.filter(spot => parseInt(spot.user_id) === parseInt(userInfo.id));
  }

  const userLikedSpots = () => {
    return spots && spots.filter(spot => spot.likes.some(
      like => parseInt(like.user_id) === parseInt(userInfo.id)));
  }

  return (
    <Box
      sx={{ width: '100%', minHeight: "75%" }}
      bgcolor={"#F0F0F0"} display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Box
        sx={{
          borderBottom: "none",
          borderColor: 'devider',
          width: '40%',
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="投稿したスポット" {...a11yProps(0)} color='"primary.light'/>
          <Tab label="いいねしたスポット" {...a11yProps(1)} color='"primary.light'/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {!spots && <Spinner ></Spinner>}
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={'space-between'}
          alignItems={"center"}
        >
          <SpotCard spots={userPostedSpots()} text={"投稿"} />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      {!spots && <Spinner ></Spinner>}
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={'space-between'}
          alignItems={"center"}
        >
          <SpotCard spots={userLikedSpots()} text={"いいね"} />
        </Box>
      </CustomTabPanel>
    </Box>
  );
}