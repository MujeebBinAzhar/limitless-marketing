import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Limitless Marketing",
  description: " Limiteless Marketing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
