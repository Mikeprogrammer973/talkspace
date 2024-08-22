import { ReactNode, useState } from "react";
import { Comment } from "./comment";

export function CommentWrapper()
{
    const [visible, setVisible] = useState<boolean>(false)
    const replies: ReactNode[] = [
        <Comment />,
        <Comment />
    ]
    return (
        <div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
                {replies.length > 0 && <div className="pl-2">
                    <button onClick={()=>setVisible(prev => !prev)} className="text-gray-400"> {visible ? "Hide replies" : "Show replies"}({replies.length}) </button>
                    {visible && <div>
                        {
                            replies.map((reply, i) => <div key={i}> {reply} </div>)
                        }
                    </div>}
                </div>}
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
            <div>
                <Comment />
            </div>
        </div>
    )
}