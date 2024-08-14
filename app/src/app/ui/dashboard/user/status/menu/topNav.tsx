import { PlayIcon, EllipsisHorizontalIcon, PauseIcon } from "@heroicons/react/20/solid";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import MsgBox from "tspace/app/ui/global/msgBox";
import { TopNavMenu } from "./topNavMenu";
import { UserStatus } from "tspace/app/lib/user/test/status/definition";

type StatusPrms = {
    setTimer: Dispatch<SetStateAction<number>>,
    setVideoStatus: Dispatch<SetStateAction<{current: number, duration: number}>>,
    videoStatus: {current: number, duration: number},
    status: {
        current: UserStatus,
        all: UserStatus[]
    },
    pause: boolean,
    setPause: Dispatch<SetStateAction<boolean>>
}

export function StatusTopNav({setTimer, setVideoStatus, videoStatus, status, pause, setPause}: StatusPrms)
{
    // const timerRef = useRef<HTMLDivElement>(null)
    // const animationIdRef = useRef<number>(0);
    // const [width, setWidth] = useState(0);
    const timerId = useRef<number>(0)
    const [visible, setVisible] = useState<boolean>(false)
    let pos: number[] = []

    const fill_poos = (init: boolean)=>{
        status.all.forEach((status_, i)=>{
            const fill = ()=>{
                if(status_.type === 'image')
                {
                    pos.push(i)
                    pos.push(i)
                } else {
                    pos.push(i)
                }
            }
            if(init)
            {
                if(status.all.length >= 2 && i > 0)
                {
                    fill()
                }
            } else{
                fill()
            }
        })
    }

    fill_poos(true)

    const next = ()=>{
        if(pos.length === 0) fill_poos(false)
        timerId.current = pos.shift() || 0
        setTimeout(()=>{
            setTimer(timerId.current)
        }, 100)
        console.log(timerId, pos)
    }

    // if(status.current.type === 'video')
    // {
    //     if(((videoStatus.current/videoStatus.duration)*100) >= 100)
    //     {
    //         setTimeout(()=>{
    //             setVideoStatus({current: 0, duration: 0})
    //         }, 200)
    //         next()
    //     }
    // }

    // const play = () => {
    //     setWidth(prev => {
    //         if(timerId.current === 3) return 0
    //         if(prev >= 100){
    //             next()
    //             return .3
    //         }
    //         return prev + .3
    //     });
    //     animationIdRef.current = requestAnimationFrame(play);
    //   };

    // useEffect(() => {
    //     // Iniciar a animação
    //     animationIdRef.current = requestAnimationFrame(play);
    
    //     // Limpar a animação quando o componente é desmontado
    //     return () => {
    //       if (animationIdRef.current) {
    //         cancelAnimationFrame(animationIdRef.current);
    //       }
    //     };
    // }, []);

    const select = (pos_: number)=>{
        timerId.current = pos_
        setTimeout(()=>{
            setTimer(timerId.current)
        }, 100)
        // setWidth(0)
    }

    // if(pause){
    //     if (animationIdRef.current) {
    //         cancelAnimationFrame(animationIdRef.current);
    //     }
    // }

    return (
        <>
            <div className={"grid gap-2 mb-2"} style={{gridTemplateColumns: `repeat(${status.all.length}, minmax(0, 1fr))`}}>
                {status.all.map((status, i)=>{
                    return (
                        <div key={i} onClick={()=>select(i)} className={"h-1 cursor-pointer rounded-2xl" + (timerId.current === i ? " bg-white" : " bg-slate-500")}>
                            {/* <div key={i+1} style={{width: `${timerId.current === i ? (status.type === 'video' ? (videoStatus.current/videoStatus.duration)*100 : width) : 0}%`}} ref={timerRef} className="h-1 bg-slate-200 rounded-2xl"></div> */}
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-between items-center px-2">
                <div className="flex items-center cursor-pointer">
                    <img className="w-10 h-10 rounded-full" alt="demo-status-image" 
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKhSSwriyDJ4jG9pHgrfUFjfM3jbemkw0Jw&s"}
                        width={100} height={100} 
                    />
                    <p className="px-2 max-w-40 overflow-x-hidden overflow-ellipsis">maria_eduda_ribeira</p>
                    <p className="text-gray-400">21h</p>
                </div>
                <div className="flex items-center gap-4">
                    {/* {status.current.type === 'video' && <><PlayIcon onClick={()=>{setPause(false);play()}} title="Play" className={"w-5 h-5 cursor-pointer " + (!pause && "hidden")} />
                    <PauseIcon onClick={()=>{setPause(true)}} title="Pause" className={"w-5 h-5 cursor-pointer " + (pause && "hidden")} /></>} */}
                    <MsgBox visible={visible} setVisible={setVisible} msg={<TopNavMenu />} />
                    <EllipsisHorizontalIcon onClick={()=>setVisible(true)}  title="Menu" className="w-8 h-8 cursor-pointer" />
                </div>
            </div>
        </>
    )
}