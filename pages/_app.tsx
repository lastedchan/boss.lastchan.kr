import "normalize.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  // const mode = useMediaQuery("(prefers-color-scheme: dark)") ? "dark" : "light";
  const theme = createTheme({
    palette: {
      // mode,
      // ...(mode === "light" ? {} : { background: { paper: "#222" } }),
    },
    typography: {
      fontFamily: "'NanumGothic', '돋움', 'Dotum', serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
