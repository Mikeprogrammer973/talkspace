
import { NextAuthConfig } from 'next-auth'

export const authConfig = {
    pages: {
        signIn: "/login"
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } })
        {
            const isLoggedIn = true
            // !!auth?.user
            const isOnDashboard = nextUrl.pathname.startsWith("/dashboard")
            const isOnLib = nextUrl.pathname.startsWith("/final_video.mp4")
            if(isOnDashboard || isOnLib)
            {
                if(isLoggedIn) return true
                return false
            } else if(isLoggedIn){
                return Response.redirect(new URL("/dashboard", nextUrl))
            }
            return true
        }
    },
    providers: []
} satisfies NextAuthConfig