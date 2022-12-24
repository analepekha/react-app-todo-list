import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#333333",
      light: "#5c5c5c",
      dark: "#0c0c0c",
      contrastText: "#44c0b6",
    },
    secondary: {
      main: "#44c0b6",
      light: "#7cf3e8",
      dark: "#008f86",
      contrastText: "#000000",
    },
  },
});
