"use client"
import { LinkIcon, PencilIcon } from "@heroicons/react/20/solid"
import { Profile } from "@prisma/client"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { Button } from "tspace/app/ui/global/button"

export default function ProfileSection({profile}: {profile: any}) {
    const profilePic = useSession().data?.user.image

    const regex = /\[(.*?)\]/g

    const user_bio = profile.bio && profile.bio.replace(regex, "").split("\n")
    
    const bio_links: string[] = profile.bio && profile.bio.match(regex)?.map((match: string) => match.slice(1, -1)) || []

    return <div className="bg-gray-800 p-6 rounded-xl shadow-lg mx-auto">
        <div className="flex flex-col items-center space-y-6 sm:space-y-0 sm:flex-row sm:space-x-8">
        
            {/* Foto do usuário */}
            <div className="flex-shrink-0">
                <img
                src={profilePic}
                alt={`${profile.user.name}'s profile`}
                className="w-36 h-36 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-indigo-600"
                />
            </div>

            {/* Informações do usuário */}
            <div className="flex-grow text-center sm:text-left max-w-full">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{profile.user.name}</h1>
                <p className="text-lg text-gray-400 whitespace-nowrap max-w-full overflow-hidden overflow-ellipsis">@{profile.username}</p>
                
                {user_bio && <div className="max-w-full py-5"> {user_bio.map((line: string, i: number)=>{
                    return <p key={i} className="max-w-full whitespace-nowrap overflow-hidden overflow-ellipsis italic text-gray-200"> {line} </p>
                  }) }</div>}
                  {bio_links && 
                  <div className="max-w-full">
                    {
                      bio_links.map((link, i)=>{
                        const link_split = link.split('|')
                        return <p title={link_split[0]} key={i} className="whitespace-nowrap max-w-full overflow-hidden overflow-ellipsis text-purple-400 hover:text-purple-300 py-2">
                          <LinkIcon fill="gray" className="w-4 inline-block" />
                          <a className="" target="_blank" href={link_split[1]}> {link_split[0]} </a>
                        </p>
                      })
                    }
                  </div>
                  }

                {/* Email (apenas em dispositivos maiores) */}
                <div className="mt-6">
                    <span className="text-gray-400 text-sm">Email:</span>
                    <p className="text-lg text-white break-all">{profile.user.email}</p>
                </div>
                <Link href={"/profile/edit"}>
                    <Button className="mt-10 py-4 px-8 w-full sm:w-auto flex items-center justify-center gap-3 text-lg">
                        <PencilIcon fill="currentColor" className="w-5" />
                        <span>Edit</span>
                    </Button>
                </Link>
            </div>
        </div>

    </div>
}