import { AdjustmentsHorizontalIcon, ArrowLeftStartOnRectangleIcon, BookmarkIcon, WrenchScrewdriverIcon } from "@heroicons/react/20/solid";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ReactNode } from "react";

export default function MenuItem({icon, label}: {icon: ReactNode, label: string, })
{
    return (
        <div className="flex gap-4 items-center p-3 cursor-pointer hover:animate-pulse">
            {icon}
            <p className="text-lg">{label}</p>
        </div>
    )
}

export function MoreOptions()
{
    return (
        <div className="bg-gray-800 p-5 rounded-lg text-gray-200">
            <MenuItem label="Settings" icon={<AdjustmentsHorizontalIcon fill="currentColor" className="w-8 h-8" />} />
            <MenuItem label="Saved" icon={<BookmarkIcon fill="currentColor" className="w-8 h-8" />} />
            <MenuItem label="Report a problem" icon={<WrenchScrewdriverIcon fill="currentColor" className="w-8 h-8" />} />
            <br /><hr /><br />
            <MenuItem label="Switch accounts" icon={<ArrowsRightLeftIcon fill="currentColor" className="w-8 h-8" />} />
            <Link href={'/dashboard/logout'}>
                <MenuItem label="Log out" icon={<ArrowLeftStartOnRectangleIcon fill="currentColor" className="w-8 h-8" />} />
            </Link>
        </div>
    )
}