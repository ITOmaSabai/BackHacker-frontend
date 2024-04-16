import { Button } from "@mui/material"
import XIcon from '@mui/icons-material/X';

export const ShareButton = ({ url }) => {
  const handleClick = () => {
    window.open(`${url}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <Button  onClick={handleClick} >
      <XIcon />
    </Button>
  );
}