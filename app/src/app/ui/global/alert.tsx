
import React, { ReactNode } from "react"

export function Alert(Prms: {color: string, title: string, msg: ReactNode})
{
    let classes: string[] = ["", ""]
    switch(Prms.color)
    {
        case "danger":
            classes[0] = "bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md"
            classes[1] = "fill-current h-6 w-6 text-red-500 mr-4"
            break
        case "warning":
            classes[0] = "bg-orange-100 border-t-4 border-orange-500 rounded-b text-orange-900 px-4 py-3 shadow-md"
            classes[1] = "fill-current h-6 w-6 text-orange-500 mr-4"
            break
        case "info":
            classes[0] = "bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md"
            classes[1] = "fill-current h-6 w-6 text-blue-500 mr-4"
            break
        case "success":
            classes[0] = "bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
            classes[1] = "fill-current h-6 w-6 text-teal-500 mr-4"
    }
    return(
        <div className={classes[0]} role="alert">
        <div className="flex">
            <div className="py-1"><svg className={classes[1]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
            <div>
                <p className="font-bold text-xl"> {Prms.title} </p>
                <div className="text-sm"> {Prms.msg} </div>
            </div>
        </div>
        </div>
    )
}