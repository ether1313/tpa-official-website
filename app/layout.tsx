import type { Metadata } from "next";
import { Inter, Orbitron, Bowlby_One_SC } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";

// === Google Fonts ===
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "TPA - Trusted Pokies Australia",
  description:
    "Your trusted pokies review & verification partner in Australia. Play Safe. Play Smart.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body
        className={`${inter.variable} ${orbitron.variable} font-sans antialiased min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50`}
      >
        <div className="relative min-h-screen">
          <div
            className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30`}
          ></div>

          <LoadingScreen />

          <Header />
          <main className="relative pt-32 animate-fadeIn">{children}</main>
          <Footer />

          <BackToTop />
        </div>
      </body>
    </html>
  );
}
