"use client"
import { Post } from "tspace/app/ui/dashboard/user/post/post"
import { Post as PostModel } from '@prisma/client'
import { StatusWrapper } from "tspace/app/ui/dashboard/user/status/statusWrapper"
import { useSession } from "next-auth/react"
import EmailTemplate from "../lib/util/mail/template"

export default function Page()
{
    const posts: PostModel[] = [
        {id: 0, type: "image", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnruJtQT6TpeyTOIN_CH6QPGUnNfKjo9Cy6A&s"}, 
        {id: 1, type: "image", url: "https://qaziclinic.com/wp-content/uploads/2021/01/img3-5.jpg"}, 
        {id: 2, type: "image", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKhSSwriyDJ4jG9pHgrfUFjfM3jbemkw0Jw&s"}, 
        {id: 3, type: "video", url: "/final_video.mp4"}, 
        {id: 4, type: "image", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3fw-6itilhqMfWao69syYXFzH6FKUX_KLQ&s"},
        {id: 9, type: "youtube", url: "oQXZZcWtOQw?si=If8Xy8-bw3Zc2wJ9"}, 
        {id: 5, type: "image", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRqC0QTapocrSRTC4ThnZg0gBdBf6j0xjXA&s"}, 
        {id: 6, type: "image", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjxBdGNpxNbdI0z3iDzSEMHQc_d-IJG-9Auw&s"}, 
        {id: 10, type: "youtube", url: "bK3EwIMHm94?si=4ut0jHsK3ymePiWU"}, 
        {id: 7, type: "image", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZcuH4G82tvC1pv_nLDyKfaJBl6HpX4irB-A&s"}   
    ]

    const session = useSession()

    const notifications = {
        newFollower: 'JaneDoe',
        mentioned: { by: 'JohnDoe', context: 'post' },
        postLike: { by: 'Alice', type: 'comment' },
        comment: { by: 'Bob', context: 'post' },
        newMessage: 'Charlie',
        friendRequest: 'David',
    }

    const email_content = EmailTemplate.getTemplate(EmailTemplate.notificationMsgTemplate(session.data?.user.username as string, notifications))

    return (
        <div className="w-full max-w-[100vw]">
            <StatusWrapper />
            <div>
                {
                    posts.map((post, i)=>{
                        return <Post key={i} post={post} />
                    })
                }
            </div>
        </div>
    )
}