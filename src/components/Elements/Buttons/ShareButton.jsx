import { IconButton } from "@mui/material"
import XIcon from '@mui/icons-material/X';

export const ShareButton = ({ url }) => {
  const handleClick = () => {
    window.open(`${url}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <IconButton onClick={handleClick} >
      <XIcon />
    </IconButton>
  );
}