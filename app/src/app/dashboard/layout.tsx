import { ReactNode } from "react";
import SideNav from "../ui/dashboard/menu/sideNav";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Dashboard"
}

export default function Layout({ children }: { children: ReactNode })
{
    return (
        <div className="flex">
            <SideNav />
            <div>
                {children}
            </div>
        </div>
    )
}