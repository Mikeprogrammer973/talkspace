import { PlayIcon, EllipsisHorizontalIcon, PauseIcon } from "@heroicons/react/20/solid";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

export function StatusTopNav({setTimer}: {setTimer: Dispatch<SetStateAction<number>>})
{
    const [pause, setPause] = useState<boolean>(false)
    const timerRef = useRef<HTMLDivElement>(null)
    const animationIdRef = useRef<number>(0);
    const [width, setWidth] = useState(0);
    const timerId = useRef<number>(0)
    let pos: number[] = [1, 1, 2, 2, 3, 3]
    
    const play = () => {
        setWidth(prev => {
            if(prev >= 100){
                if(pos.length === 0) pos = [0, 0, 1, 1, 2, 2, 3, 3]
                timerId.current = pos.shift() || 0
                setTimeout(()=>{
                    setTimer(timerId.current)
                }, 100)
                console.log(timerId, pos)
                return .3
            }
            return prev + .3
        });
        animationIdRef.current = requestAnimationFrame(play);
      };

      useEffect(() => {
        // Iniciar a animação
        animationIdRef.current = requestAnimationFrame(play);
    
        // Limpar a animação quando o componente é desmontado
        return () => {
          if (animationIdRef.current) {
            cancelAnimationFrame(animationIdRef.current);
          }
        };
    }, []);

    const handlePause = () => {
    if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
    }
    };

    const select = (pos_: number)=>{
        timerId.current = pos_
        setTimeout(()=>{
            setTimer(timerId.current)
        }, 100)
        setWidth(0)
    }

    return (
        <>
            <div className="grid grid-cols-4 gap-2 mb-2">
                <div onClick={()=>select(0)} className="h-1 bg-slate-500 cursor-pointer rounded-2xl">
                    <div style={{width: `${timerId.current === 0 ? width : 0}%`}} ref={timerRef} className="h-1 bg-slate-200 rounded-2xl"></div>
                </div>
                <div onClick={()=>select(1)} className="h-1 bg-slate-500 cursor-pointer rounded-2xl">
                    <div style={{width: `${timerId.current === 1 ? width : 0}%`}} ref={timerRef} className="h-1 bg-slate-200 rounded-2xl"></div>
                </div>
                <div onClick={()=>select(2)} className="h-1 bg-slate-500 cursor-pointer rounded-2xl">
                    <div style={{width: `${timerId.current === 2 ? width : 0}%`}} ref={timerRef} className="h-1 bg-slate-200 rounded-2xl"></div>
                </div>
                <div onClick={()=>select(3)} className="h-1 bg-slate-500 cursor-pointer rounded-2xl">
                    <div style={{width: `${timerId.current === 3 ? width : 0}%`}} ref={timerRef} className="h-1 bg-slate-200 rounded-2xl"></div>
                </div>
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
                    <PlayIcon onClick={()=>{setPause(false); play()}} title="Play" className={"w-5 h-5 cursor-pointer " + (!pause && "hidden")} />
                    <PauseIcon onClick={()=>{setPause(true); handlePause()}} title="Pause" className={"w-5 h-5 cursor-pointer " + (pause && "hidden")} />
                    <EllipsisHorizontalIcon title="Menu" className="w-8 h-8 cursor-pointer" />
                </div>
            </div>
        </>
    )
}