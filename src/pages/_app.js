import Script from "next/script";
import Navbar from "../components/Navbar";
import "../app/globals.css";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
      {/* Google Analytics Scripts */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-01M4RDLR1Z"
        strategy="afterInteractive"
        async
      />
      <Script
        id="google-analytics-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-01M4RDLR1Z');
                    `,
        }}
      />
    </>
  );
}

export default MyApp;
