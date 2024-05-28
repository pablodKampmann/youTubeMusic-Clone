"use client"

import { Roboto } from "next/font/google";
import "./globals.css";
import SideBarDesktop from "./components/layoutComponents/desktop/sideBar";
import SideBarMobile from "./components/layoutComponents/mobile/sideBar";
import NavBarDesktop from "./components/layoutComponents/desktop/navBar";
import NavBarMobile from "./components/layoutComponents/mobile/navBar";
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

        {/* Desktop */}
        <div className="h-screen desktop-version w-full overflow-y-hidden">
          <NavBarDesktop minimize={minimize} handleSideBar={handleSideBar} />
          <div className="flex h-full">
            <SideBarDesktop minimize={minimize} />
            {children}
          </div>
        </div>

        {/* Mobile */}
        <div className="h-screen mobile-version w-full overflow-y-hidden">
          <NavBarMobile minimize={minimize} handleSideBar={handleSideBar} />
          <SideBarMobile minimize={minimize} handleSideBar={handleSideBar}/>
          {children}
        </div>

      </body>
    </html>
  );
}
