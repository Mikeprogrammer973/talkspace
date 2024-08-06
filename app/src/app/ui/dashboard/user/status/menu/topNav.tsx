import { PlayIcon, EllipsisHorizontalIcon, PauseIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export function StatusTopNav()
{
    const [pause, setPause] = useState<boolean>(false)
    return (
        <>
            <div className="grid grid-cols-4 gap-2 mb-2">
                <div className="h-1 bg-slate-500 rounded-2xl"></div>
                <div className="h-1 bg-slate-500 rounded-2xl"></div>
                <div className="h-1 bg-slate-500 rounded-2xl"></div>
                <div className="h-1 bg-slate-500 rounded-2xl"></div>
            </div>
            <div className="flex justify-between items-center px-2">
                <div className="flex items-center cursor-pointer">
                    <img className="w-10 h-10 rounded-full" alt="demo-status-image" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKhSSwriyDJ4jG9pHgrfUFjfM3jbemkw0Jw&s"} width={100} height={100} />
                    <p className="px-2 max-w-40 overflow-x-hidden overflow-ellipsis">maria_eduda_ribeira</p>
                    <p className="text-gray-400">21h</p>
                </div>
                <div className="flex items-center gap-4">
                    <PlayIcon onClick={()=>setPause(false)} title="Play" className={"w-5 h-5 cursor-pointer " + (!pause && "hidden")} />
                    <PauseIcon onClick={()=>setPause(true)} title="Pause" className={"w-5 h-5 cursor-pointer " + (pause && "hidden")} />
                    <EllipsisHorizontalIcon title="Menu" className="w-8 h-8 cursor-pointer" />
                </div>
            </div>
        </>
    )
}