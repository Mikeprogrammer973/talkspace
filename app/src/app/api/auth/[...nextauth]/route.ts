
import { z } from 'zod'
import { getByUsername } from 'tspace/app/lib/user';
import { compare } from "bcryptjs";
import Credentials from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import NextAuth from 'next-auth/next'

export const authConfig = NextAuth({
    adapter: PrismaAdapter(new PrismaClient()),
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                usernaname: {
                    label: "Username",
                    type: "text"
                },
                passsword: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize(credentials){
                const parsedCreds = z.object({
                    username: z.string().trim(),
                    password: z.string().min(8)
                }).safeParse(credentials)
                
                if(parsedCreds.success)
                {
                    const {username, password} = parsedCreds.data

                    const user = await getByUsername(username)
                    if(!user) return null
                    const passwordsMatch = await compare(password, user.password)

                    if(passwordsMatch) return user as any
                }

                return null
            }
        })
    ],
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
                    email: token.email as string
                };
            }
            return session
        } 
    }
})

export { authConfig as GET, authConfig as POST }