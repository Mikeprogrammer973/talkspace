
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
            {prms.status && <div className="text-right rounded-t-xl"><span onClick={()=>{prms.setVisible(false)}} className="inline-block h-8 w-8 text-center cursor-pointer p-[.4rem] rounded-full text-blue-500 hover:text-white hover:bg-blue-500 text-sm">X</span></div>}
            {prms.msg}
        </div>
    </section> : <div></div>
    )
}