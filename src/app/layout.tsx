import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import TopBar from "./components/topBar";
import SideBar from "./components/sideBar";

const inter = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "YouTube Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/*  <TopBar />*/}
        <SideBar /> 
        {children}
      </body>
    </html>
  );
}
