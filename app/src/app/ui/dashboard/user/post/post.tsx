import { PostBottomNav } from "./menu/bottomNav"
import { PostTopNav } from "./menu/topNav"

export function Post()
{
    return(
        <div className="w-full flex items-center justify-center my-5 px-10">
            <div className="min-w-[50svw] border-b-[1px] border-gray-600">
                <PostTopNav />
                <div className="border-[1px] border-gray-700">
                    <img className="w-full" src="https://qaziclinic.com/wp-content/uploads/2021/01/img3-5.jpg" alt="img_teste" />
                </div>
                <PostBottomNav />
            </div>
        </div>
    )
}