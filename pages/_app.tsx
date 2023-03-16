import "normalize.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { FAVICON, PAGES, TITLE } from "@/constants/app";
import Script from "next/script";
import AppLayout from "@/components/templates/app";

export default function App(props: AppProps) {
  const router = useRouter();
  const page = useMemo(() => PAGES.find(_ => _.path === router.pathname), [router.pathname]);

  useEffect(() => {
    window.oncontextmenu = e => e.preventDefault();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RecoilRoot>
      {page?.ad && (
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8583770780355894"
          crossOrigin="anonymous"
        />
      )}
      <Head>
        <meta name={"viewport"} content={"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"} />
        <meta property={"og:title"} content={page?.title} />
        <meta property={"og:description"} content={page?.description} />
        <meta property={"og:image"} content={page?.image} />
        <link rel="icon" href={FAVICON} type="image/png" />
        <title>{TITLE + " " + (page?.title ?? "")}</title>
      </Head>
      <AppLayout {...props} />
    </RecoilRoot>
  );
}
