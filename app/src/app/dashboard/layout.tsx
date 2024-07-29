import { ReactNode } from "react";
import SideNav from "../ui/sideNav";

export default function Layout({ children }: { children: ReactNode })
{
    return (
        <div>
            <div>
                <SideNav />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}