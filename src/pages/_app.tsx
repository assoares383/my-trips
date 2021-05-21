import { AppProps } from "next/app";
import Head from "next/head";
import NextNprogress from "nextjs-progressbar";

import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

import GlobalStyles from "styles/global";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="google-site-verification"
                    content="MpiTyE6qaBIkWjNBvNosaI1bgv3V4IVnlQg9yTvWxa0"
                />
                <link rel="shortcut icon" href="/images/icon-512.png" />
                <link rel="apple-touch-icon" href="/images/icon-512.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#06092B" />
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                    crossOrigin=""
                />
            </Head>
            <DefaultSeo {...SEO} />
            <GlobalStyles />
            <NextNprogress
                color="#49adb6"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <Component {...pageProps} />
        </>
    );
}

export default App;
