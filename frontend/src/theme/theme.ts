import { createTheme, Theme } from "@mui/material";

export const theme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
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
