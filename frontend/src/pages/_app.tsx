import "../styles/globals.css";
import { FC } from "react";
import type { AppProps } from "next/app";
import { AlertProvider, AuthProvider } from "../providers";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AlertProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </AlertProvider>
    </ThemeProvider>
  );
};

export default MyApp;
