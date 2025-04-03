import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { Poppins } from 'next/font/google'


export const metadata = {
  title: 'Next JS',
  description: 'Mening birinchi next loyiham',
  keywords: "me, nike"
}
const popins = Poppins({
  display: 'block',
  weight: ["100", "400", '600', '900'],
  subsets: ['latin'],
  variable: "--font-poppins",

})

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className={popins.className}>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
