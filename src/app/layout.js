import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingSocialIcons from "./components/FloatingSocialIcons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Chaya Tours And Travels Bengaluru",
  description:
    "Based in Bengaluru, Chaya Tours & Travels specializes in curated domestic & South India tours, seamless travel arrangements, and local expertise.",
  icons: {
    icon: "/favicon.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {childre
        <FloatingSocialIcons />
        <Footer />
      </body>
    </html>
  );
}
