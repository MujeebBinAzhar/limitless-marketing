import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

 
export const metadata = {
  title: "Limitless Marketing - Digital Marketing Agency",
  description: " Limiteless Marketing is a digital marketing agency that helps businesses grow online. We offer services such as SEO, PPC, Web Design, and more.",
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
