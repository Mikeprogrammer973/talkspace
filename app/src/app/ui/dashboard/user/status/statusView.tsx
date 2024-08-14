import { Button } from "../../../global/button"
import { StatusTopNav } from "./menu/topNav"
import { StatusBottomNav } from "./menu/bottomNav"
import { useState } from "react"
import { UserStatus } from "tspace/app/lib/user/test/status/definition"

export function StatusView({userStatus}: {userStatus: UserStatus[]})
{
    const [timer, setTimer] = useState<number>(0)
    const [videoStatus, setVideoStatus] = useState<{current: number, duration: number}>({current: 0, duration: 0})
    const [pause, setPause] = useState<boolean>(false)

    return (
        <div className={"w-full h-full flex justify-center md:justify-between items-center p-5 -mt-6"}>
            <Button className="hidden md:flex">&lt;</Button>
            <div className="p-5">
                <div className="bg-black p-2">
                    <StatusTopNav pause={pause} setPause={setPause} setTimer={setTimer} setVideoStatus={setVideoStatus} videoStatus={videoStatus} status={{current: userStatus[timer], all: userStatus}} />
                </div>
                <div>
                    {
                        userStatus.map((status, i) =>{
                            if(status.type == 'video')
                            {
                                return (
                                    <video autoPlay key={i} className={"h-[70vh] w-full" + (timer === i ? "" : " hidden")} onTimeUpdate={(e)=>setVideoStatus({current: e.currentTarget.currentTime, duration: e.currentTarget.duration})} controls preload="none">
                                        {timer === i && <source src={status.src} type="video/mp4" />}
                                        Your browser does not support the video tag.
                                    </video>
                                )
                            } else{
                                return (
                                    <img key={i} className={"bg-gray-600 w-full h-[70vh] aspect-square animate-fadeOut" + (timer === i ? "" : " hidden")} alt="demo-status-image"
                                        src={status.src}
                                    />
                                )
                            }
                        })
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