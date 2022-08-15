import "../styles/globals.css";
import { FC } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { AuthProvider } from "../providers";
import { theme } from "../theme";
import MainLayout from "../layouts/MainLayout";
import { ModalProvider } from "../providers/ModalProvider";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ModalProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ModalProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default MyApp;
