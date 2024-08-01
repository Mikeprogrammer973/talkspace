
import React, { Dispatch, ReactNode, SetStateAction } from "react";

interface MsgPrms{
    msg: ReactNode
    visible: boolean
    setVisible: Dispatch<SetStateAction<boolean>>
}

export default function MsgBox(prms: MsgPrms)
{
    return(
        prms.visible ? <section style={{backgroundColor: "rgb(0, 0, 0, 0.3)", zIndex: 2}} className="w-full h-full fixed top-0 left-0 flex items-center justify-center">
        <div className="bg-slate-100 inline-block p-4 rounded-xl shadow-lg max-w-[90%] max-h-[90%]">
            <div className="text-right p-2 mb-4 bg-slate-200 m-[-1rem] rounded-t-xl"><span onClick={()=>{prms.setVisible(false)}} className="inline-block h-8 w-8 text-center cursor-pointer p-[.4rem] rounded-full ring-2 ring-red-500 text-red-500 hover:text-white hover:bg-red-500 text-sm">X</span></div>
            {prms.msg}
        </div>
    </section> : <div></div>
    )
}