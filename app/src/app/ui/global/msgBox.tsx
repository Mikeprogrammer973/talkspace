
import React, { Dispatch, ReactNode, SetStateAction } from "react";

interface MsgPrms{
    msg: ReactNode
    visible: boolean
    setVisible: Dispatch<SetStateAction<boolean>>
    status?: boolean,
    zIndx?: number
}

export default function MsgBox(prms: MsgPrms)
{
    return(
        prms.visible ? <section onClick={(e)=>{
            prms.setVisible(false)
        }} style={{backgroundColor: "rgb(0, 0, 0, 0.8)", zIndex: 2}} className="w-full h-full fixed top-0 left-0 z-50 flex items-center justify-center">
        <div className={"inline-block" + (prms.status ? " w-full h-screen rounded-none shadow-none bg-transparent" : " bg-gray-900 max-w-[90%] max-h-[90%] rounded-xl shadow-lg overflow-y-scroll scrollbar-none")}>
            {prms.msg}
        </div>
        {<div title="Close" className="fixed top-0 right-0 p-1"><span onClick={()=>{prms.setVisible(false)}} className="inline-block text-xl text-gray-400 hover:text-white font-extralight text-center cursor-pointer p-[.4rem]">X</span></div>}
    </section> : <div></div>
    )
}