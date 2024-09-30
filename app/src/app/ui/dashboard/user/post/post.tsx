"use client"
import VideoPlayer from "../util/video_player"
import { PostBottomNav } from "./menu/bottomNav"
import { PostTopNav } from "./menu/topNav"
import { Post as PostModel} from '@prisma/client'

export function Post({post}: {post: PostModel})
{
    const yt_embed = "https://youtube.com/embed/"
    return(
        <div className="w-full flex items-center justify-center my-5 px-10">
            <div className="w-full max-w-[600px] border-b-[1px] border-gray-600">
                <PostTopNav />
                <div className="w-full border-[1px] border-gray-700 flex items-center justify-center rounded-lg">
                    {post.type === "image" ? (
                        <img className="w-full max-w-[600px] h-auto rounded-lg" src={post.url} alt="img_teste" />
                    ) : (
                        post.type === "video"
                        ? (
                            <VideoPlayer videoSrc={post.url} thumbnail="https://www.healthdigest.com/img/gallery/science-says-this-female-body-type-is-most-attractive-to-men-upgrade/intro-1692030948.jpg" />
                        )
                        : <iframe className="w-full max-w-[600px] h-[300px] md:h-[500px] lg:h-[600px] rounded-lg" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" src={yt_embed + post.url} frameBorder="0"></iframe>
                    )
                    }
                </div>
                <PostBottomNav />
            </div>
        </div>
    )
}