import { HeartIcon, PaperAirplaneIcon } from "@heroicons/react/20/solid";

export function StatusBottomNav()
{
    return (
        <div className="flex gap-3 justify-around box-border">
            <input type="text" className="max-w-[300px] bg-transparent rounded-2xl border-[1px] text-sm text-gray-200 border-gray-300 p-2" placeholder="Reply to maria_eduda..." />
            <HeartIcon title="Like" className="max-w-[40px] cursor-pointer" fill={"whitesmoke"} />
            <PaperAirplaneIcon title="Send" className="max-w-[40px] cursor-pointer" />
        </div>
    )
}