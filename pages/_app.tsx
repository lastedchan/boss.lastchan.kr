import "normalize.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [loaded, setLoaded] = useState(false);

  const theme = createTheme({
    typography: {
      fontFamily: "'NanumGothic', '돋움', 'Dotum', serif",
    },
  });

  useEffect(() => {
    !loaded && setLoaded(true);
  }, []);

  if (!loaded) return null;

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
