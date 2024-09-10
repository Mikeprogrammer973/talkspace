"use client"
import { Inter } from "next/font/google";
import "../globals.css";
import BottomNav from "../ui/dashboard/menu/bottomNav";
import SideNav from "../ui/dashboard/menu/sideNav";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
        <SessionProvider>
          <div className="block md:flex justify-end">
              <SideNav />
              <div className="h-full w-[100%] md:w-[80%]">
                  {children}
              </div>
              <BottomNav />
          </div>
        </SessionProvider>
      </div>
  );
}
