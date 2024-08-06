import { ReactNode } from "react";
import SideNav from "../ui/dashboard/menu/sideNav";
import { Metadata } from "next"
import BottomNav from "../ui/dashboard/menu/bottomNav";

export const metadata: Metadata = {
    title: "Dashboard"
}

export default function Layout({ children }: { children: ReactNode })
{
    return (
        <div className="block md:flex justify-end">
            <SideNav />
            <div className="h-full w-[100%] md:w-[80%]">
                {children}
            </div>
            <BottomNav />
        </div>
    )
}