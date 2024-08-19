
import React, { Dispatch, ReactNode, SetStateAction } from "react";

interface MsgPrms{
    msg: ReactNode
    visible: boolean
    setVisible: Dispatch<SetStateAction<boolean>>
    status?: boolean
}

export default function MsgBox(prms: MsgPrms)
{
    return(
        prms.visible ? <section onClick={(e)=>{
            prms.setVisible(false)
        }} style={{backgroundColor: "rgb(0, 0, 0, 0.8)", zIndex: 2}} className="w-full h-full fixed top-0 left-0 flex items-center justify-center">
        <div className={"inline-block p-4" + (prms.status ? " w-full h-screen rounded-none shadow-none bg-transparent" : " bg-gray-900 max-w-[90%] max-h-[90%] rounded-xl shadow-lg")}>
            {/* {<div className="text-right p-4 mb-4 m-[-1rem] rounded-t-xl"><span onClick={()=>{prms.setVisible(false)}} className="inline-block h-8 w-8 text-center cursor-pointer p-[.4rem] rounded-full ring-2 ring-red-500 text-red-500 hover:text-white hover:bg-red-500 text-sm">X</span></div>} */}
            <div onClick={()=>{prms.setVisible(false)}} title="Close" className="bg-gray-800 h-4 cursor-pointer -m-4 mb-2"></div>
            {prms.msg}
        </div>
    </section> : <div></div>
    )
}