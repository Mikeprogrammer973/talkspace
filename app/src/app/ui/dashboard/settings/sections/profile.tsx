"use client"
import { PencilIcon } from "@heroicons/react/20/solid"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { Button } from "tspace/app/ui/global/button"

export default function ProfileSection({user}: {user: any}) {
    const profilePic = useSession().data?.user.image
    return <div className="bg-gray-950 p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
        <div className="flex flex-col items-center space-y-6 sm:space-y-0 sm:flex-row sm:space-x-8">
        
            {/* Foto do usuário */}
            <div className="flex-shrink-0">
                <img
                src={profilePic}
                alt={`${user.name}'s profile`}
                className="w-36 h-36 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-indigo-600"
                />
            </div>

            {/* Informações do usuário */}
            <div className="flex-grow text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{user.name}</h1>
                <p className="text-lg text-gray-400">@{user.profiles[0].username}</p>
                <p className="text-sm sm:text-base text-gray-300 mt-4">{user.bio}</p>

                {/* Email (apenas em dispositivos maiores) */}
                <div className="mt-6">
                    <span className="text-gray-400 text-sm">Email:</span>
                    <p className="text-lg text-white break-all">{user.email}</p>
                </div>
                <Link href={"/profile/edit"}>
                    <Button className="my-10 py-4 px-8 w-full sm:w-auto flex items-center justify-center gap-3 text-lg">
                        <PencilIcon fill="currentColor" className="w-5" />
                        <span>Edit</span>
                    </Button>
                </Link>
            </div>
        </div>

    </div>
}