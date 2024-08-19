import { PostBottomNav } from "../menu/bottomNav";
import { CommentWrapper } from "./wrapper";

export function CommentZone()
{
    return (
        <div onClick={(e)=>e.stopPropagation()} className="">
            <CommentWrapper />
            <div className="sticky bottom-0 bg-black p-2">
                <PostBottomNav full={false} />
            </div>
        </div>
    )
}