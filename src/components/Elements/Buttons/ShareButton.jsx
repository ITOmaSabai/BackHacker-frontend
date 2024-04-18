import { IconButton } from "@mui/material"
import XIcon from '@mui/icons-material/X';

export const ShareButton = ({ url, sx }) => {
  const handleClick = () => {
    window.open(`${url}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <IconButton onClick={handleClick} sx={sx} >
      <XIcon />
    </IconButton>
  );
}