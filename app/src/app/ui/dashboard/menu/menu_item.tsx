import { AdjustmentsHorizontalIcon, ArrowLeftStartOnRectangleIcon, BookmarkIcon, WrenchScrewdriverIcon } from "@heroicons/react/20/solid";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ReactNode } from "react";

export default function MenuItem({icon, label, normal = true, counter}: {icon: ReactNode, label: string, normal?: boolean, counter?: ReactNode})
{
    return (
        <div title={label} className={"flex gap-4 items-center p-3 cursor-pointer hover:animate-pulse" + (normal === true && " justify-center lg:justify-normal")}>
            {icon}
            {counter && counter}
            <p className={"text-lg" + (normal === true && " hidden lg:block")}>{label}</p>
        </div>
    )
}

export function MoreOptions()
{
    return (
        <div onClick={(e)=>e.stopPropagation()} className="bg-gray-800 p-5 rounded-lg text-gray-200">
            <MenuItem normal={false} label="Settings" icon={<AdjustmentsHorizontalIcon fill="currentColor" className="w-8 h-8" />} />
            <MenuItem normal={false} label="Saved" icon={<BookmarkIcon fill="currentColor" className="w-8 h-8" />} />
            <MenuItem normal={false} label="Report a problem" icon={<WrenchScrewdriverIcon fill="currentColor" className="w-8 h-8" />} />
            <br /><hr /><br />
            <MenuItem normal={false} label="Switch accounts" icon={<ArrowsRightLeftIcon fill="currentColor" className="w-8 h-8" />} />
            <Link href={'/dashboard/logout'}>
                <MenuItem normal={false} label="Log out" icon={<ArrowLeftStartOnRectangleIcon fill="currentColor" className="w-8 h-8" />} />
            </Link>
        </div>
    )
}