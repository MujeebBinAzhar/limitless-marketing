import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "next/head";

// Move SEOHead inside RootLayout or separate it into its own file if needed
function SEOHead() {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>Limitless Marketing | Sales & Marketing Experts in Ireland</title>
      <meta
        name="description"
        content="Limitless Marketing is a leading sales and marketing agency based in Ireland, specializing in face-to-face acquisition, brand promotion, and business growth strategies across Ireland."
      />
      <meta
        name="keywords"
        content="sales and marketing, Ireland marketing agency, face-to-face sales, brand promotion, client acquisition, business development, field sales, marketing company Ireland, sales solutions, Limitless Marketing"
      />
      <meta name="author" content="Limitless Marketing" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />

      {/* Open Graph / Facebook */}
      <meta
        property="og:title"
        content="Limitless Marketing | Sales & Marketing Experts in Ireland"
      />
      <meta
        property="og:description"
        content="We help brands grow through expert sales, marketing strategies, and face-to-face client acquisition. based in Ireland, serving all of Ireland."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.limitless-marketing.ie" />
      <meta property="og:image" content="/assets/seo/og-image.png" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Limitless Marketing | Sales & Marketing Experts in Ireland"
      />
      <meta
        name="twitter:description"
        content="Boost your brand with our proven sales and marketing strategies. Limitless Marketing leads the way in Ireland."
      />
      <meta name="twitter:image" content="/assets/seo/twitter-image.png" />
      <meta name="twitter:site" content="@limitless_marketing_ltd" />

      {/* Favicon */}

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/seo/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/seo/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/seo/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SEOHead />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
