import "normalize.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { FAVICON, PAGES, THUMBNAIL, TITLE } from "@/constants/app";
import Script from "next/script";
import AppLayout from "@/components/templates/app";
import * as gtag from "@/libs/gtag";

export default function App(props: AppProps) {
  const router = useRouter();
  const page = useMemo(() => PAGES.find(_ => _.path === router.pathname), [router.pathname]);

  useEffect(() => {
    window.oncontextmenu = e => e.preventDefault();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <RecoilRoot>
      {page?.ad && (
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8583770780355894"
          crossOrigin="anonymous"
        />
      )}
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Head>
        <meta name={"viewport"} content={"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"} />
        <meta property={"og:title"} content={page?.title} />
        <meta property={"og:description"} content={page?.description} />
        <meta property={"og:image"} content={THUMBNAIL} />
        <link rel="icon" href={FAVICON} type="image/png" />
        <title>{TITLE + " " + (page?.title ?? "")}</title>
      </Head>
      <AppLayout {...props} />
    </RecoilRoot>
  );
}
