"use client"
import { PencilSquareIcon, AdjustmentsHorizontalIcon, ArrowLeftStartOnRectangleIcon, TableCellsIcon, FilmIcon, BookmarkIcon, LinkIcon } from "@heroicons/react/20/solid";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import VideoPlayer from "../user/util/video_player";
import Link from "next/link";

export default function Dashboard({profile}: {profile: any})
{
    const [filter, setFilter] = useState(0)
    const picture = useSession().data?.user.image

    const regex = /\[(.*?)\]/g

    const profile_bio = profile.bio && profile.bio.replace(regex, "").split("\n")
    
    const bio_links: string[] = profile.bio && profile.bio.match(regex)?.map((match: string) => match.slice(1, -1)) || []

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
          {/* Header */}
          <header className="bg-gray-950 shadow-lg">
            <div className="container mx-auto flex justify-between items-center py-6 px-8">
              <h1 className="text-xl font-bold text-white hidden md:block">Account Dashboard</h1>
              <div className="flex items-center space-x-6">
                <img
                  src={picture}
                  alt={profile.user.name || 'profile'}
                  className="rounded-full w-10 h-10"
                />
                <p className="font-semibold sm:inline-block hidden max-w-40 whitespace-nowrap overflow-hidden overflow-ellipsis">{profile.user.name || "profile"}</p>
                <button title="Edit Profile" className="text-gra y-300 hover:text-gray-200">
                  <Link href={"/profile/edit"}>
                      <PencilSquareIcon fill="currentColor" className="w-7" />
                  </Link>
                </button>
                <button title="Settings" className="text-gray-300 hover:text-gray-200">
                  <Link href={"/settings"}>
                    <AdjustmentsHorizontalIcon fill="currentColor" className="w-7" />
                  </Link>
                </button>
                <button onClick={() => signOut({ callbackUrl: '/auth/signin' })} title="Log out" className="text-gray-300 hover:text-gray-200 md:hidden">
                  <ArrowLeftStartOnRectangleIcon fill="currentColor" className="w-7" />
                </button>
              </div>
            </div>
          </header>
            
          {/* Main Content */}
          <main className="container mx-auto py-12 px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* profile Info */}
              <div className="bg-gray-800 p-8 rounded-lg shadow-md">
                <div className="flex flex-col items-center">
                  <img
                    src={picture}
                    alt={profile.user.name || 'profile'}
                    className="rounded-full w-32 h-32 mb-6 border-4 border-gray-700"
                  />
                  <h2 className="text-xl font-bold text-center">{profile.user.name || "profile"}</h2>
                  <p className="text-gray-400 text-center max-w-full whitespace-nowrap overflow-hidden overflow-ellipsis">@{profile.username || 'profilename'}</p>
                  {profile_bio && <div className="max-w-full p-5 text-center"> {profile_bio.map((line: string, i: number)=>{
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
                </div>
                <div className="flex gap-5 justify-around mt-8 overflow-x-scroll scrollbar-none">
                  <div className="text-center">
                    <span className="font-bold text-lg text-white"> {profile.posts.length} </span>
                    <p className="text-gray-400">Posts</p>
                  </div>
                  <div className="text-center">
                    <span className="font-bold text-lg text-white"> {profile.followers.length} </span>
                    <p className="text-gray-400">Followers</p>
                  </div>
                  <div className="text-center">
                    <span className="font-bold text-lg text-white"> {profile.following.length} </span>
                    <p className="text-gray-400">Following</p>
                  </div>
                </div>
              </div>
    
              {/* profile Posts Grid */}
              <div className="md:col-span-2">
                <div className="flex items-center justify-between my-5">
                  <button onClick={()=>setFilter(0)} title="ALL POSTS" className={"flex flex-wrap items-center justify-center gap-2 py-4 " + (filter === 0 ? "text-gray-100 border-t-2 border-current" : "text-gray-400 border-none")}>
                    <TableCellsIcon fill="currentColor" className="w-5" /> ALL
                  </button>
                  <button onClick={()=>setFilter(1)} title="REELS" className={"flex flex-wrap items-center justify-center gap-2 py-4 " + (filter === 1 ? "text-gray-100 border-t-2 border-current" : "text-gray-400 border-none")}>
                    <FilmIcon fill="currentColor" className="w-5" /> REELS
                  </button>
                  <button onClick={()=>setFilter(2)} title="SAVED POSTS" className={"flex flex-wrap items-center justify-center gap-2 py-4 " + (filter === 2 ? "text-gray-100 border-t-2 border-current" : "text-gray-400 border-none")}>
                    <BookmarkIcon fill="currentColor" className="w-5" /> SAVED
                  </button>
                </div>
                {filter === 0 && <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[...Array(50)].map((_, i) => (
                    <div
                      key={i}
                    >
                      <img
                        src={'https://qaziclinic.com/wp-content/uploads/2021/01/img3-5.jpg'}
                        alt={`Postagem ${i + 1}`}
                        className="object-cover w-full h-full hover:scale-105 transition duration-500 ease-in-out rounded-lg cursor-pointer"
                      />
                    </div>
                  ))}
                </div>}
                {filter === 1 && <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                    >
                      <VideoPlayer videoSources={["/final_video.mp4"]} thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyaoFceIP1DnWFeoNTo6wcAAxClHDuhqiy9g&s" />
                    </div>
                  ))}
                </div>}
                {filter === 2 && <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                    >
                      <img
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3fw-6itilhqMfWao69syYXFzH6FKUX_KLQ&s'}
                        alt={`Postagem ${i + 1}`}
                        className="object-cover w-full h-full hover:scale-105 transition duration-500 ease-in-out rounded-lg cursor-pointer"
                      />
                    </div>
                  ))}
                </div>}
              </div>
            </div>
          </main>
        </div>
    )
}