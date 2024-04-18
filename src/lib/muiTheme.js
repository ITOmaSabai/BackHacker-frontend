import { grey, deepPurple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
  palette: {
    primary: {
      main: grey[800],
      light: "#FAFAFA",
      dark: "#212121"
    },
    secondary: {
      main: '#FAFAFA',
      light: deepPurple[500],
      dark: grey[800]
    },
  },
  typography: {
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,

    subtitle1: { fontSize: 18 },
    body1: { fontSize: 16 },
    button: { textTransform: "none" },
    fontfamily: [
      // 'Hitmarker Text Regular", Arial',
      // '"Helvetica Neue"'
      "Courier New",
      "Menlo",
      "Monaco",
      "Consolas",
      "Noto Sans JP",
      "游ゴシック体"
    ].join(','),
  },
  props: {
    MuiTextField: { variant: "outlined" },
    MuiCheckbox: { color: "primary" },
    MuiRadio: {
        color: "primary"
    },
    MuiSwitch: {
        color: "primary"
    },
    MuiList: {
      dense: true
    },
    MuiTable: {
      size: "small"
    },
  },
});
