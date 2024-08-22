"use client"
import { BookmarkIcon, ChatBubbleOvalLeftIcon, HeartIcon, ShareIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState } from "react";
import MsgBox from "tspace/app/ui/global/msgBox";
import { CommentZone } from "../comment/zone";

export function PostBottomNav({full = true}: {full?: boolean})
{
    const [like, setLike] = useState<boolean>(false)
    const [visible, setVisible] = useState<boolean>(false)
    return (
        <div className="py-2 text-sm">
            <div className="flex items-center justify-between">
                <div className="flex gap-8">
                    {visible && <MsgBox visible={visible} setVisible={setVisible} msg={<CommentZone />} />}
                    <HeartIcon onClick={()=>setLike(prev => !prev)} role="button" title="Like" stroke={like ? "" : "currentColor"} fill={like ? "red" : ""} className="w-6 lg:w-8 h-6 lg:h-8 hover:text-gray-400" />
                    <ChatBubbleOvalLeftIcon onClick={()=>setVisible(true)} role="button" title="Comment" stroke="currentColor" fill="transparent" className="w-6 lg:w-8 h-6 lg:h-8 hover:text-gray-400" />
                    <ShareIcon role="button" title="Share Post" stroke="currentColor" fill="transparent" className="w-6 lg:w-8 h-6 lg:h-8 hover:text-gray-400" />
                </div>
                <BookmarkIcon role="button" title="Save" stroke="currentColor" fill="transparent" className="w-6 lg:w-8 h-6 lg:h-8 hover:text-gray-400" />
            </div>
            {full ? <div className="py-2">
                <p className="font-light">
                    Liked by <Link className="font-semibold" href={"#"}>0_m_i_r_a_c_l_e_0</Link> and <button className="font-semibold">others</button>
                </p>
            </div> : <div className="py-2 text-gray-500">
                <p title="August 8, 2024">10 days</p>
            </div>}
            <div className="py-2">
                {full && <><p className="text-nowrap overflow-ellipsis overflow-x-hidden ">
                    <Link className="font-semibold" href={"#"}>maria_eduda_ribeira</Link> Tem meu trabalho e tem o seu trabalho, Maga!
                </p>
                <p className="text-blue-400">
                    <Link href={"#"} className="tracking-widest">#escritoriodocoala</Link>
                </p>
                <p className="py-2 text-gray-300">
                    <button onClick={()=>setVisible(true)}>View all 102 comments</button>
                </p></>}
                <p className="flex gap-4">
                    <input type="text" placeholder="Add a comment..." className="bg-transparent w-[80%] text-gray-300 text-sm py-2 outline-none" />
                    <button className="w-[20%] text-right text-blue-500 font-semibold hover:text-white">Post</button>
                </p>
            </div>
        </div>
    )
}