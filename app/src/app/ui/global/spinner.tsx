
import React from "react";

interface SpinnerPrms {
    visible: boolean,
    label: string
}

 export default function Spinner(prms: SpinnerPrms)
{
    return(
        prms.visible ? <div style={{backgroundColor: "rgb(0, 0, 0, 0.4)", zIndex: "2"}} className="w-full h-full fixed top-0 left-0 text-white items-center justify-center flex">
        {/* {<img className="animate-ping rounded-full max-w-[100px] max-h-[100px]" src={"/logo/talkspace-logo-short.png"} alt="spinner-logo" />} */}
        <div className="grid grid-cols-1 items-center justify-center">
            <p className="animate-spin h-20 w-20 rounded-full border-[5px] border-l-0 border-r-0 border-slate-300 p-1">
                <svg className="animate-spin h-full w-full rounded-full border-[5px] border-t-0 border-b-0 border-green-300" viewBox="0 0 24 24">
                </svg>
            </p>
            <p className="my-4 tracking-widest font-semibold">{prms.label}</p>
        </div>
    </div> : <div></div>
    )
}
