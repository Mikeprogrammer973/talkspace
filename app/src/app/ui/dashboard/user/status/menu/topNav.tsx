import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import MsgBox from "tspace/app/ui/global/msgBox";
import { TopNavMenu } from "./topNavMenu";
import { UserStatus } from "tspace/app/lib/user/test/status/definition";
import { ProfileIcon } from "../../util/profile_icon";

type StatusPrms = {
    statusId: number,
    setStatusId: Dispatch<SetStateAction<number>>,
    status: {
        current: UserStatus,
        all: UserStatus[]
    }
}

export function StatusTopNav({setStatusId, status, statusId}: StatusPrms)
{
    const [visible, setVisible] = useState<boolean>(false)
   
    return (
        <>
            <div className={"grid gap-2 mb-2"} style={{gridTemplateColumns: `repeat(${status.all.length}, minmax(0, 1fr))`}}>
                {status.all.map((status, i)=>{
                    return (
                        <div key={i} onClick={()=>setStatusId(i)} className={"h-1 cursor-pointer rounded-2xl" + (statusId === i ? " bg-white" : " bg-slate-500")}>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-between items-center px-2">
                <div className="flex items-center cursor-pointer">
                    <ProfileIcon 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKhSSwriyDJ4jG9pHgrfUFjfM3jbemkw0Jw&s"
                        size={{width: 3, height: 3}}
                    />
                    <p className="px-2 max-w-40 overflow-x-hidden overflow-ellipsis">maria_eduda_ribeira</p>
                    <p className="text-gray-400">21h</p>
                </div>
                <div className="flex items-center gap-4">
                    <MsgBox visible={visible} setVisible={setVisible} msg={<TopNavMenu />} />
                    <EllipsisHorizontalIcon onClick={()=>setVisible(true)}  title="Menu" className="w-8 h-8 cursor-pointer" />
                </div>
            </div>
        </>
    )
}