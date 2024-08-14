import { PostTopNav } from "./menu/topNav"

export function Post()
{
    return(
        <div className="w-full flex items-center justify-center my-5">
            <div className="min-w-[50svw]">
                <PostTopNav />
                <div className="border-[1px] border-gray-600 p-5">
                    <img className="w-full" src="https://qaziclinic.com/wp-content/uploads/2021/01/img3-5.jpg" alt="img_teste" />
                </div>
            </div>
        </div>
    )
}