import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import BottomNav from "../ui/dashboard/menu/bottomNav";
import SideNav from "../ui/dashboard/menu/sideNav";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:{
    template: "%s | TalkSpace",
    default: "TalkSpace"
  },
  description: "Connect with friends and make new connections. Chat, share, and explore a social network full of possibilities."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <div className="block md:flex justify-end">
              <SideNav />
              <div className="h-full w-[100%] md:w-[80%]">
                  {children}
              </div>
              <BottomNav />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
