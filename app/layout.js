import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Zenex Cloud Solutions",
  description: "Zenex Cloud Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans antialiased text-slate-900">
        <Navbar />
        <main className="">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
