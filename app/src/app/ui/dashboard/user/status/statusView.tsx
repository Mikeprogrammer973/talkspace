import { Button } from "../../../global/button"
import { StatusTopNav } from "./menu/topNav"
import { StatusBottomNav } from "./menu/bottomNav"
import { useState } from "react"
import { UserStatus } from "tspace/app/lib/user/test/status/definition"

export function StatusView({userStatus}: {userStatus: UserStatus[]})
{
    const [statusId, setStatusId] = useState<number>(0)
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);

    const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
        setTouchStartX(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
        setTouchEndX(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStartX - touchEndX > 50) {
            previous()
        }

        if (touchEndX - touchStartX > 50) {
            next()
        }
    };

    const previous = ()=>{
        setStatusId(prev => statusId === 0 ? (userStatus.length - 1) : prev - 1)
    }

    const next = ()=>{
        setStatusId(prev => statusId === (userStatus.length - 1) ? 0 : prev + 1)
    }
    
    return (
        <div className={"w-full h-full flex justify-center md:justify-between items-center p-20"}>
            <Button onClick={(e)=>{e.stopPropagation(); previous()}} className="hidden md:flex">&lt;</Button>
            <div onClick={(e)=>e.stopPropagation()} className="p-5">
                <div className="bg-gray-800 p-2">
                    <StatusTopNav statusId={statusId} setStatusId={setStatusId} status={{current: userStatus[statusId], all: userStatus}} />
                </div>
                <div onClick={(e)=>e.stopPropagation()}>
                    {
                        userStatus.map((status_, i) =>{
                            if(status_.type == 'video')
                            {
                                return (
                                    <div 
                                        key={i}
                                        onTouchStart={handleTouchStart}
                                        onTouchMove={handleTouchMove}
                                        onTouchEnd={handleTouchEnd}
                                    >
                                        {statusId === i && <video onEnded={()=>next()} autoPlay key={i=1} className={"max-h-[70vh] w-full" + (statusId === i ? "" : " hidden")} controls preload="none">
                                            <source key={i+2} src={status_.src} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>}
                                    </div>
                                )
                            } else{
                                return (
                                    <img 
                                        onTouchStart={handleTouchStart}
                                        onTouchMove={handleTouchMove}
                                        onTouchEnd={handleTouchEnd}
                                        onClick={()=>next()} key={i+4} className={"bg-gray-600 w-full max-h-[70vh] aspect-square animate-fadeOut" + (statusId === i ? "" : " hidden")} alt="demo-status-image"
                                        src={status_.src}
                                    />
                                )
                            }
                        })
                    }
                </div>
                <div onClick={(e)=>e.stopPropagation()} className="bg-gray-800 p-2">
                    <StatusBottomNav />
                </div>
            </div>
            <Button onClick={(e)=>{e.stopPropagation(); next()}} className="hidden md:flex">&gt;</Button>
        </div>
    )
}