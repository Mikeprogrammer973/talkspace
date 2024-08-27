"use client"

import Image from "next/image"
import MenuItem, { MoreOptions } from "./menu_item"
import { HomeIcon } from "@heroicons/react/16/solid"
import { AdjustmentsHorizontalIcon, ArrowLeftStartOnRectangleIcon, ArrowsPointingOutIcon, ArrowsRightLeftIcon, BellAlertIcon, BookmarkIcon, ChatBubbleLeftRightIcon, FilmIcon, MagnifyingGlassIcon, PlusCircleIcon, WrenchScrewdriverIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

export default function SideNav()
{
    return (
        <div className="bg-gray-700 md:w-[20%] md:h-screen md:fixed text-gray-200 overflow-y-scroll scrollbar-none sticky top-0 left-0 right-0 flex justify-between md:block">
            <div className="flex items-center justify-center sticky top-0 bg-gray-800">
                <Link href={"/dashboard"}>
                    <Image alt="logo_banner" className="hidden md:block" src={"/logo/talkspace-banner.png"} width={150} height={150} />
                    <Image alt="logo_short" className="block md:hidden" src={"/logo/talkspace-logo-short.png"} width={75} height={75} />
                </Link>
            </div>
            <Link className="flex items-center" href={"/dashboard"}>
                <MenuItem label="Home" icon={<HomeIcon fill="currentColor" className="w-8 h-8" />} />
            </Link> 
            <div className="hidden md:block">
                <Link href={"/dashboard/search"}>
                    <MenuItem label="Search" icon={<MagnifyingGlassIcon fill="currentColor" className="w-8 h-8" />}/>
                </Link>
            </div>
            <div className="hidden md:block">
                <MenuItem label="Explore" icon={<ArrowsPointingOutIcon fill="currentColor" className="w-8 h-8" />} />
            </div>
            <MenuItem label="Reels" icon={<FilmIcon fill="currentColor" className="w-8 h-8" />} />
            <MenuItem label="Messages" counter={<span className="-ml-7 -mt-3 w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full flex items-center justify-center">{18}</span>} icon={<ChatBubbleLeftRightIcon fill="currentColor" className="w-8 h-8" />}/>
            <MenuItem label="Notifications" counter={<span className="-ml-7 -mt-3 w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full flex items-center justify-center">{61}</span>} icon={<BellAlertIcon fill="currentColor" className="w-8 h-8" />}/>
            <div className="hidden md:block">
                <MenuItem label="Create" icon={<PlusCircleIcon fill="currentColor" className="w-8 h-8" />} />
            </div>
            <MenuItem label="Profile" icon={<Image alt="icon_profile" className="w-8 h-8 rounded-full bg-slate-500" src={"/lib/util/generate/user/profile/image"} width={200} height={200} />} />
            <div className="hidden md:block">
                <MenuItem label="Settings" icon={<AdjustmentsHorizontalIcon fill="currentColor" className="w-8 h-8" />} />
                <MenuItem label="Saved" icon={<BookmarkIcon fill="currentColor" className="w-8 h-8" />} />
                <MenuItem label="Report a problem" icon={<WrenchScrewdriverIcon fill="currentColor" className="w-8 h-8" />} />
                <br /><hr /><br />
                <MenuItem label="Switch accounts" icon={<ArrowsRightLeftIcon fill="currentColor" className="w-8 h-8" />} />
                <Link href={'/dashboard/logout'}>
                    <MenuItem label="Log out" icon={<ArrowLeftStartOnRectangleIcon fill="currentColor" className="w-8 h-8" />} />
                </Link>
            </div>
        </div>
    )
}