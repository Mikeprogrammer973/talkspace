
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import { NextAuthConfig } from 'next-auth'
import { NextResponse } from 'next/server'

export const authConfig = {
    pages: {
        signIn: "/auth/signin",
        newUser: "/auth/signup",
        error: "/auth/error"
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
      },
    callbacks: {
        authorized({ auth, request: { nextUrl } })
        {
            const isLoggedIn = !!auth?.user
            const isOnDashboard = nextUrl.pathname === "/"

            if (nextUrl.pathname.startsWith('/_next') || nextUrl.pathname.includes('.')) {
                return NextResponse.next();
            }

            if(isOnDashboard)
            {
                if(isLoggedIn) return true
                return false
            } else if(isLoggedIn){
                return NextResponse.next()
            }
            return true
        },
        async jwt({ token, user }) {
            if (user) {
              token.email = user.email;
              token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user = {
                    id: token.id as string,
                    email: token.email as string,
                    emailVerified: null
                };
            }
            return session
        }
            
    },
    providers: [],
    adapter: PrismaAdapter(new PrismaClient()),
} satisfies NextAuthConfig