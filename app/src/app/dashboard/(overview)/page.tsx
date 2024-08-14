import { Post } from "tspace/app/ui/dashboard/user/post/post"
import { StatusWrapper } from "tspace/app/ui/dashboard/user/status/statusWrapper"

export default function Page()
{
    return (
        <div className="w-full max-w-[100vw]">
            <StatusWrapper />
            <div>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}