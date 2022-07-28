import { createTheme, Theme } from "@mui/material";

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#0070c0",
      contrastText: "#fff",
    },
    background: {
      default: "#f7fafe",
    },
  },
});

export default theme;
