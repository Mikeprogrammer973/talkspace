import Image from "next/image"
import { Button } from "../../../global/button"
import { EllipsisHorizontalIcon, HeartIcon, PlayIcon, PlayPauseIcon } from "@heroicons/react/20/solid"
import { StatusTopNav } from "./menu/topNav"
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { StatusBottomNav } from "./menu/bottomNav"

export function StatusView()
{
    return (
        <div className={"w-full h-full flex justify-center md:justify-between items-center p-5 -mt-6"}>
            <Button className="hidden md:flex">&lt;</Button>
            <div className="p-5">
                <div className="bg-black p-2">
                    <StatusTopNav />
                </div>
                <div>
                    <img className="bg-gray-600 w-[70vh] h-[70vh] aspect-square" alt="demo-status-image" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKhSSwriyDJ4jG9pHgrfUFjfM3jbemkw0Jw&s"} width={100} height={100} />
                </div>
                <div className="bg-black p-2">
                    <StatusBottomNav />
                </div>
            </div>
            <Button className="hidden md:flex">&gt;</Button>
        </div>
    )
}