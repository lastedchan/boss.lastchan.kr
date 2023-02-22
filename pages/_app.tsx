import "normalize.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { PAGES, TITLE } from "@/constants/app";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const page = useMemo(() => PAGES.find(_ => _.path === router.pathname), [router.pathname]);

  const [loaded, setLoaded] = useState(false);

  const theme = createTheme({
    typography: {
      fontFamily: "'NanumGothic', '돋움', 'Dotum', serif",
    },
    components: {
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: "rgba(255,255,255,0.12)",
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          thumb: {
            background: "linear-gradient(to top, #fff 25%, #ccc) content-box",
          },
          track: { background: "#999" },
          switchBase: {
            "&.Mui-checked+.MuiSwitch-track": {
              background: "linear-gradient(to top, #be0 25%, #691)",
              opacity: 1,
            },
          },
        },
      },
    },
  });

  useEffect(() => {
    !loaded && setLoaded(true);
    window.oncontextmenu = e => e.preventDefault();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!loaded) return null;

  return (
    <RecoilRoot>
      <Head>
        <meta name={"viewport"} content={"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"} />
        <meta property={"og:title"} content={page?.title ?? TITLE} />
        <meta property={"og:description"} content={page?.description} />
        <meta property={"og:image"} content={page?.image} />
        <title>{page?.title ?? TITLE}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}
