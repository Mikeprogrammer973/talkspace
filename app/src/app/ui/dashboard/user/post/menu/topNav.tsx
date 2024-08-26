"use client"
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import MsgBox from "tspace/app/ui/global/msgBox";
import { PostTopNavMenu } from "./topNavMenu";
import { ProfileIcon } from "../../util/profile_icon";

export function PostTopNav()
{
    const [visible, setVisible] = useState<boolean>(false)

    return (
        <div className="flex justify-between items-center p-2">
            <div className="flex items-center cursor-pointer flex-wrap">
                <ProfileIcon 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKhSSwriyDJ4jG9pHgrfUFjfM3jbemkw0Jw&s"
                    size={{width: 3, height: 3}}
                />
                <p className="px-2 max-w-20 md:max-w-80 overflow-x-hidden overflow-ellipsis">maria_eduda_ribeira</p>
                <p className="text-gray-400">21h</p>
            </div>
            <div className="flex items-center gap-4">
                <MsgBox visible={visible} setVisible={setVisible} msg={<PostTopNavMenu />} />
                <EllipsisHorizontalIcon onClick={()=>setVisible(true)}  title="Menu" className="w-8 h-8 cursor-pointer" />
            </div>
        </div>
    )
}