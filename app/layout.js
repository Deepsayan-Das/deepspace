import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./sections/Footer";
import CustomCursor from "./components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DeepSpace",
  description: "My Brutalist themed portfolio made on Next.js - Deepsayan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {children}
        <Footer />
      </body>
    </html>
  );
}
