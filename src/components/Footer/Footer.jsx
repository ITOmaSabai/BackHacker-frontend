import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export const Footer = () => {

  return (
    <Box
      sx={{bgcolor: "primary.main", height: "2.5rem", px: 15}}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box display="flex" sx={{gap: 5}} >
        <Typography fontSize="12px" color="primary.light">
          利用規約
        </Typography>
        <Typography fontSize="12px" color="primary.light">
          プライバシーポリシー
        </Typography>
      </Box>
      <Box >
        <Typography fontSize="12px" color="primary.light">
          © 2024 BackHacker.
        </Typography>
      </Box>
    </Box>
  );
}