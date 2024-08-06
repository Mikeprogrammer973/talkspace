import { HeartIcon, PaperAirplaneIcon } from "@heroicons/react/20/solid";

export function StatusBottomNav()
{
    return (
        <div className="flex gap-2 justify-between box-border">
            <input type="text" className="w-[40vh] bg-transparent rounded-2xl border-[1px] text-gray-200 border-gray-300 p-2" placeholder="Reply to maria_eduda..." />
            <HeartIcon title="Like" className="w-[5vh] cursor-pointer" fill={"whitesmoke"} />
            <PaperAirplaneIcon title="Send" className="w-[5vh] cursor-pointer" />
        </div>
    )
}