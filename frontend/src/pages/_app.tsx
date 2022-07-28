import "../styles/globals.css";
import { FC } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { AuthProvider } from "../providers";
import { theme } from "../theme";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default MyApp;
