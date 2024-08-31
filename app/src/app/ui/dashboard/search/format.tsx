import { HashtagIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

interface SearchRessult {
    type: "user" | "#"
    data: string[]
    details?: string[]
}
export function FormatSearchResult(result: SearchRessult)
{
    return (
        <Link href={""}>
            <div className="my-2 p-2 hover:bg-gray-500 hover:bg-opacity-30 flex gap-4 items-center flex-wrap">
                {
                    result.type === "#"
                    ? (
                        <div className="p-2 w-14 h-14 rounded-full border-[1px] border-gray-500 flex items-center justify-center">
                            <HashtagIcon className="w-12 h-12" />
                        </div>
                    )
                    : <img className="w-14 h-14 rounded-full" src={result.data[0]} alt="user-profile-image" />
                }
                <div>
                    <p> {result.data[1]} </p>
                    <p className="text-gray-500"> {result.data[2]} </p>
                </div>
            </div>
        </Link>
    )
}