import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function AppLayout({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    typography: {
      fontFamily: "'NanumGothic', '돋움', 'Dotum', serif",
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: { margin: 4, backgroundColor: "#fff", fontSize: "0.916666rem" },
          input: { padding: "12px 10px" },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            minWidth: "auto",
            border: "1px solid transparent",
            borderRadius: 8,
            background: "linear-gradient(to top, #790, #cd4) padding-box, linear-gradient(to top, #ab3, #ee8) border-box",
            boxShadow: "-1px 4px #560, 1px 4px #560, -1px 2px #560, 1px 2px #560",
            alignItems: "center",
            lineHeight: 1.5,
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.2rem",
            transform: "translateY(0)",
            transition:
              "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            "&:hover": {
              borderColor: "transparent",
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
        styleOverrides: { root: { borderColor: "rgba(127,127,127,0.3)" } },
      },
      MuiSwitch: {
        styleOverrides: {
          thumb: { background: "linear-gradient(to top, #fff 25%, #ccc) content-box" },
          track: { background: "#999" },
          switchBase: {
            "&.Mui-checked+.MuiSwitch-track": {
              background: "linear-gradient(to top, #be0 25%, #691)",
              opacity: 1,
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          select: {
            margin: 0,
            padding: "0 32px 0 6px",
            paddingRight: "32px !important",
            height: 24,
            background: "linear-gradient(to top, #303030, #676767)",
            border: "1px solid #131313",
            lineHeight: "24px",
            color: "#fff",
          },
          icon: {
            top: 0,
            right: 0,
            width: 28,
            height: "100%",
            borderLeft: "1px solid #131313",
            color: "#bbb",
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            borderRadius: "0 0 4px 4px / 0 0 4px 4px !important",
            backgroundColor: "#444 !important",
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            padding: "4px",
            minHeight: "unset",
            fontSize: "0.75rem",
            color: "#fff",
            "&.Mui-selected, &.Mui-selected:hover, &:hover": { background: "#222" },
          },
        },
      },
      MuiList: {
        styleOverrides: { root: { padding: 0 } },
      },
      MuiListItemIcon: {
        styleOverrides: { root: { color: "#fff" } },
      },
    },
  });

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    !loaded && setLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!loaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
