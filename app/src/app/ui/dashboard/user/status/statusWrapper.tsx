"use client"

import { useRef } from "react";
import { Button } from "../../../global/button";
import { Status } from "./status";

export function StatusWrapper()
{
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({
            left: -100,
            behavior: 'smooth'
          });
        }
      };
    
    const scrollRight = () => {
    if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
        left: 100,
        behavior: 'smooth'
        });
    }
    };

    return (
        <div className="flex justify-around items-center">
            <Button className="hidden sm:flex max-w-[10%] w-10 h-10 rounded-3xl cursor-pointer select-none text-center" onClick={()=>scrollLeft()}>&lt;</Button>
            <div ref={scrollContainerRef} className="flex flex-row overflow-x-auto max-w-[100%] sm:max-w-[80%] box-border gap-2 justify-between items-center flex-shrink-0 p-4 bg-transparent text-white scrollbar-none">
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
                <Status user={null}/>
            </div>
            <Button className="hidden sm:flex max-w-[10%] w-10 h-10 rounded-3xl cursor-pointer select-none text-center" onClick={()=>scrollRight()}>&gt;</Button>
        </div>
    )
}