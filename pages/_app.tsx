import "normalize.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { RecoilRoot } from "recoil";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    typography: {
      fontFamily: "'NanumGothic', '돋움', 'Dotum', serif",
    },
  });

  return (
    <RecoilRoot>
      <Head>
        <meta name={"viewport"} content={"width=device-width,initial-scale=1"} />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}
