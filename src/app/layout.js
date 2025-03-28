import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

 
export const metadata = {
  title: "Limitless Marketing",
  description: " Limiteless Marketing ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  >
        {children}
      </body>
    </html>
  );
}
