"use client"

import { Roboto } from "next/font/google";
import "./globals.css";
import TopBar from "./components/topBar";
import SideBar from "./components/sideBar";
import NavBar from "./components/navBar";
import React, { useState, useEffect } from 'react';

const inter = Roboto({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [minimize, setMinimize] = useState(false)

  const handleSideBar = (action: boolean) => {
    setMinimize(action);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen w-full overflow-y-hidden">
          <NavBar minimize={minimize} handleSideBar={handleSideBar} />
          <div className="flex h-full">
            <SideBar minimize={minimize} />
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}
