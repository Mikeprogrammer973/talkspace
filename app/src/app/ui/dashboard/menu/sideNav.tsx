"use client"
import Image from "next/image"
import MenuItem, { MoreOptions } from "./menu_item"
import { HomeIcon } from "@heroicons/react/16/solid"
import { AdjustmentsHorizontalIcon, ArrowLeftStartOnRectangleIcon, ArrowsPointingOutIcon, ArrowsRightLeftIcon, BellAlertIcon, BookmarkIcon, ChatBubbleLeftRightIcon, FilmIcon, MagnifyingGlassIcon, PlusCircleIcon, WrenchScrewdriverIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import { signOut } from "next-auth/react"

export default function SideNav()
{
    const def_style = "flex items-center justify-center lg:justify-normal"
    return (
        <div className="bg-gray-700 md:w-[20%] md:h-screen md:fixed text-gray-200 overflow-y-scroll scrollbar-none sticky top-0 left-0 right-0 flex justify-between md:block">
            <div className="flex items-center justify-center sticky top-0 bg-gray-800">
                <Link href={"/"}>
                    <Image alt="logo_banner" className="hidden md:block" src={"/logo/talkspace-banner.png"} width={150} height={150} />
                    <Image alt="logo_short" className="block md:hidden" src={"/logo/talkspace-logo-short.png"} width={75} height={75} />
                </Link>
            </div>
            <Link className={def_style} href={"/"}>
                <MenuItem label="Home" icon={<HomeIcon fill="currentColor" className="w-8 h-8" />} />
            </Link> 
            <div className="hidden md:block">
                <Link href={"/search"}>
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
            <Link href={"/profile"} className={def_style} >
                <MenuItem label="Profile" icon={<div className="w-8 h-8"><img alt="icon_profile" className="w-full h-full rounded-full bg-slate-500" src={"https://qaziclinic.com/wp-content/uploads/2021/01/img3-5.jpg"} /></div>} />
            </Link>
            <div className="hidden md:block">
                <MenuItem label="Settings" icon={<AdjustmentsHorizontalIcon fill="currentColor" className="w-8 h-8" />} />
                <MenuItem label="Saved" icon={<BookmarkIcon fill="currentColor" className="w-8 h-8" />} />
                <MenuItem label="Report a problem" icon={<WrenchScrewdriverIcon fill="currentColor" className="w-8 h-8" />} />
                <br /><hr /><br />
                <MenuItem label="Switch accounts" icon={<ArrowsRightLeftIcon fill="currentColor" className="w-8 h-8" />} />
                <button onClick={() => signOut({ callbackUrl: '/auth/signin' })} className="flex w-full items-center justify-center lg:justify-normal">
                    <MenuItem label="Log out" icon={<ArrowLeftStartOnRectangleIcon fill="currentColor" className="w-8 h-8" />} />
                </button>
            </div>
        </div>
    )
}