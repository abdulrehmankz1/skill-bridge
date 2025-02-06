import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

export const metadata: Metadata = {
  title: "Skillbridge",
  description:
    "Skillbridge is an innovative educational platform that empowers learners with top-tier courses and training programs. Whether you're pursuing a career change or expanding your skill set, Skillbridge offers personalized learning paths to help you achieve your goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/mobile-logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/mobile-logo.png" type="image/png" />
      </head>
      <body className="bg-white-97 min-h-screen">
        <Banner />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
