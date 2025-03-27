import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";


export const metadata = {
  title: 'Next JS',
  description: 'Mening birinchi next loyiham',
  keywords: "me, nike"
}

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className="container mx-auto">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
