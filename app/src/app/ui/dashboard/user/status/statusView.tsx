import { Button } from "../../../global/button"
import { StatusTopNav } from "./menu/topNav"
import { StatusBottomNav } from "./menu/bottomNav"
import { useState } from "react"

export function StatusView()
{
    const [timer, setTimer] = useState<number>(0)
    const [videoStatus, setVideoStatus] = useState<{current: number, total: number}>({current: 0, total: 0})

    return (
        <div className={"w-full h-full flex justify-center md:justify-between items-center p-5 -mt-6"}>
            <Button className="hidden md:flex">&lt;</Button>
            <div className="p-5">
                <div className="bg-black p-2">
                    <StatusTopNav setTimer={setTimer} setVideoStatus={setVideoStatus} videoStatus={videoStatus} />
                </div>
                <div>
                    {timer === 0 && <img className="bg-gray-600 w-full h-[70vh] aspect-square animate-fadeOut" alt="demo-status-image" 
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKhSSwriyDJ4jG9pHgrfUFjfM3jbemkw0Jw&s"} 
                        width={100} height={100} 
                    />}
                    {timer === 1 && <img className="bg-gray-600 w-full h-[70vh] aspect-square animate-fadeOut" alt="demo-status-image" 
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWNkwin3hI6TtDkpgxRRaod3qSMx_UDtFyA&s"} 
                        width={100} height={100} 
                    />}
                    {timer === 2 && <img className="bg-gray-600 w-full h-[70vh] aspect-square animate-fadeOut" alt="demo-status-image" 
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3fw-6itilhqMfWao69syYXFzH6FKUX_KLQ&s"} 
                        width={100} height={100} 
                    />}
                    {timer === 3 && <video controls onTimeUpdate={(e)=>setVideoStatus({current: e.currentTarget.currentTime, total: e.currentTarget.duration})} className="h-[70vh] w-full" autoPlay preload="none">
                        <source src="/final_video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    }
                </div>
                <div className="bg-black p-2">
                    <StatusBottomNav />
                </div>
            </div>
            <Button className="hidden md:flex">&gt;</Button>
        </div>
    )
}