import Link from "next/link";
import { ProfileIcon } from "../../util/profile_icon";
import { HeartIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export function Comment()
{
    const [like, setLike] = useState<boolean>(false)
    const likeCount = 145
    return (
        <div className="py-2 px-2 mt-4">
            <div>
                <div className="flex flex-wrap items-center gap-4">
                    <ProfileIcon
                        image="https://qaziclinic.com/wp-content/uploads/2021/01/img3-5.jpg"
                        size={{width: 3, height: 3}}
                    />
                    <Link className="font-semibold" href={""}>karina_sweet_007</Link>
                    <HeartIcon className="w-5 h-5 hover:text-gray-400" onClick={()=>setLike(prev => !prev)} role="button" title="Like" stroke={like ? "" : "currentColor"} fill={like ? "red" : ""} />
                </div>
                <p className="py-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="flex items-center gap-4 py-2 text-gray-400 font-extralight">
                <span title="August 18, 2024">4h</span>
                {likeCount > 0 && <span>
                    {likeCount} {likeCount > 1 ? "likes" : "like"}
                </span>}
                <button>Reply</button>
                <button className="text-red-500 font-normal">Report</button>
            </div>
        </div>
    )
}