"use client"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState } from "react";
import { SearchRessulstWrapper } from "../../ui/dashboard/search/wrapper";

export default function SearchPage()
{
    const [search, setSearch] = useState<string>("")
    return (
        <div className="max-w-[600px] p-5 pt-0 mx-auto h-screen overflow-y-scroll scrollbar-none">
            <div className="p-4 -mx-5 sticky md:top-0 bg-black">
                <input onChange={(e)=>setSearch(e.currentTarget.value)} value={search} type="search" className="w-full rounded-lg pl-10 pr-4 py-2 bg-gray-800 outline-none" name="search" placeholder="Search" />
                <MagnifyingGlassIcon className="absolute top-6 left-6 w-6 h-6" />
            </div>
            {search !== "" && <div className="p-4 m-2 hover:bg-gray-500 hover:bg-opacity-30">
                <Link href={""} className="w-full">
                    <MagnifyingGlassIcon className="w-10 h-10 inline-block p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-900 hover:text-gray-200" />
                    <span className="px-2"> {search} </span>
                </Link>
            </div>}
            <SearchRessulstWrapper />
        </div>
    )
}

