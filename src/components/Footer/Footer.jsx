import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        height: "2.5rem",
        px: { xs: 1, sm: 10, md: 15 },
        py: { xs: 1, sm: 0 }
      }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection={{
        xs: "column",
        sm: "row",
        md: "row"
      }}
    >
      <Box display="flex" sx={{gap: 5}} >
        <Link
          to={"/terms-of-service"}
          style={{color: "inherit", textDecoration: "none"}}
        >
          <Typography fontSize="12px" color="primary.light">
            利用規約
          </Typography>
        </Link>
        <Box >
          <Link
            to={"/privacy-policy"}
            style={{color: "inherit", textDecoration: "none"}}
          >
            <Typography fontSize="12px" color="primary.light">
              プライバシーポリシー
            </Typography>
          </Link>
        </Box>
      </Box>
      <Box >
        <Typography fontSize="12px" color="primary.light">
          © 2024 BackHacker.
        </Typography>
      </Box>
    </Box>
  );
}