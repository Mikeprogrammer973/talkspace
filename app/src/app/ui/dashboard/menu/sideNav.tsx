"use client"

import Image from "next/image"
import MenuItem, { MoreOptions } from "./menu_item"
import { HomeIcon } from "@heroicons/react/16/solid"
import { ArrowsPointingOutIcon, Bars3Icon, BellAlertIcon, ChatBubbleLeftRightIcon, FilmIcon, MagnifyingGlassIcon, PlusCircleIcon } from "@heroicons/react/20/solid"
import MsgBox from "../../global/msgBox"
import { ReactNode, useState } from "react"

export default function SideNav()
{
    const [visible, setVisible] = useState<boolean>(false)
    const [msg, setMsg] = useState<ReactNode>()
    function showMoreOptions()
    {
        setMsg(<MoreOptions />)
        setVisible(true)
    }
    return (
        <div className="bg-gray-700 md:w-[20%] md:h-screen text-gray-200 overflow-y-scroll scrollbar-none sticky md:relative top-0 left-0 right-0 flex justify-between md:block">
            <div className="flex items-center justify-center sticky top-0 bg-gray-800">
                <Image alt="logo_banner" className="hidden md:block" src={"/logo/talkspace-banner.png"} width={150} height={150} />
                <Image alt="logo_short" className="block md:hidden" src={"/logo/talkspace-logo-short.png"} width={75} height={75} />
            </div>
            <MenuItem label="Home" icon={<HomeIcon fill="currentColor" className="w-8 h-8" />} /> 
            <div className="hidden md:block">
                <MenuItem label="Search" icon={<MagnifyingGlassIcon fill="currentColor" className="w-8 h-8" />}/>
            </div>
            <div className="hidden md:block">
                <MenuItem label="Explore" icon={<ArrowsPointingOutIcon fill="currentColor" className="w-8 h-8" />} />
            </div>
            <MenuItem label="Reels" icon={<FilmIcon fill="currentColor" className="w-8 h-8" />} />
            <MenuItem label="Messages" counter={<span className="relative -ml-7 -mt-3 w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full flex items-center justify-center">{18}</span>} icon={<ChatBubbleLeftRightIcon fill="currentColor" className="w-8 h-8" />}/>
            <MenuItem label="Notifications" counter={<span className="relative -ml-7 -mt-3 w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full flex items-center justify-center">{61}</span>} icon={<BellAlertIcon fill="currentColor" className="w-8 h-8" />}/>
            <MenuItem label="Create" icon={<PlusCircleIcon fill="currentColor" className="w-8 h-8" />} />
            <MenuItem label="Profile" icon={<Image alt="icon_profile" className="w-8 h-8 rounded-full bg-slate-500" src={"/lib/util/generate/user/profile/image"} width={200} height={200} />} />
            <button className="w-full text-center md:text-left hidden md:block" onClick={()=>showMoreOptions()}>
                <MenuItem label="More" icon={<Bars3Icon fill="currentColor" className="w-8 h-8" />} />
            </button>
            <MsgBox msg={msg} visible={visible} setVisible={setVisible}/>
        </div>
    )
}