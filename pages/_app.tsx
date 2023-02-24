import "normalize.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { PAGES, TITLE } from "@/constants/app";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const page = useMemo(() => PAGES.find(_ => _.path === router.pathname), [router.pathname]);

  const theme = createTheme({
    typography: {
      fontFamily: "'NanumGothic', '돋움', 'Dotum', serif",
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            margin: 4,
            fontSize: "0.916666rem",
          },
          input: {
            padding: "12px 10px",
            backgroundColor: "#fff",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            display: "flex",
            border: "1px solid transparent",
            borderRadius: 8,
            background: "linear-gradient(to top, #790, #cd4) padding-box, linear-gradient(to top, #ab3, #ee8) border-box",
            boxShadow: "-1px 4px #560, 1px 4px #560, -1px 2px #560, 1px 2px #560",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "1.2rem",
            transition:
              "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            "&:hover": {
              textShadow: "0 0 8px #fff",
              boxShadow: "-1px 4px #560, 1px 4px #560, -1px 2px #560, 1px 2px #560",
              "& .MuiSvgIcon-root": {
                filter: "drop-shadow(0 0 8px #fff)",
              },
            },
            "&:active": {
              boxShadow: "-1px 2px #560, 1px 2px #560, -1px 0 #560, 1px 0 #560",
              transform: "translateY(2px)",
            },
          },
        },
      },
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
    window.oncontextmenu = e => e.preventDefault();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RecoilRoot>
      <Head>
        <meta name={"viewport"} content={"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"} />
        <meta property={"og:title"} content={page?.title} />
        <meta property={"og:description"} content={page?.description} />
        <meta property={"og:image"} content={page?.image} />
        <title>{TITLE + " " + (page?.title ?? "")}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}
