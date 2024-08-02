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
        <div className="bg-gray-700 max-w-80 h-screen text-gray-200 overflow-y-scroll scrollbar-none">
            <MsgBox msg={msg} visible={visible} setVisible={setVisible}/>
            <div className="p-2 flex items-center justify-center sticky top-0 bg-gray-800">
                <Image alt="logo_" src={"/logo/talkspace-banner.png"} width={150} height={150} />
            </div>
            <MenuItem label="Home" icon={<HomeIcon fill="currentColor" className="w-8 h-8" />} />
            <MenuItem label="Search" icon={<MagnifyingGlassIcon fill="currentColor" className="w-8 h-8" />}/>
            <MenuItem label="Explore" icon={<ArrowsPointingOutIcon fill="currentColor" className="w-8 h-8" />} />
            <MenuItem label="Reels" icon={<FilmIcon fill="currentColor" className="w-8 h-8" />} />
            <MenuItem label="Messages" icon={<ChatBubbleLeftRightIcon fill="currentColor" className="w-8 h-8" />}/>
            <MenuItem label="Notifications" icon={<BellAlertIcon fill="currentColor" className="w-8 h-8" />}/>
            <MenuItem label="Create" icon={<PlusCircleIcon fill="currentColor" className="w-8 h-8" />} />
            <MenuItem label="Profile" icon={<Image alt="icon_profile" className="w-8 h-8 rounded-full border-2 bg-slate-500" src={"/lib/util/generate/user/profile/image"} width={200} height={200} />} />
            <button onClick={()=>showMoreOptions()}>
                <MenuItem label="More" icon={<Bars3Icon fill="currentColor" className="w-8 h-8" />} />
            </button>
        </div>
    )
}