
import { z } from 'zod'
import { getByEmail, getByUsername, getProfilePicture } from 'tspace/app/lib/user';
import { compare } from "bcryptjs";
import Credentials from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import NextAuth from 'next-auth/next'

const prisma = new PrismaClient()

const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize(credentials){
                const parsedCreds = z.object({
                    email: z.string().trim(),
                    password: z.string().min(8)
                }).safeParse(credentials)
                
                if(parsedCreds.success)
                {
                    const {email, password} = parsedCreds.data

                    const user = await getByEmail(email)
                    if(!user) return null
                    const passwordsMatch = await compare(password, user.password)

                    if(passwordsMatch) {
                        await prisma.user.update({where: {email: email}, data: {verificationCode: null}});
                        return user as any
                    }
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
        maxAge: 86400
      },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.email = user.email 
                token.id = user.id 
                token.name = user.name 
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user = {
                    id: token.id as string,
                    email: token.email as string,
                    name: token.name as string,
                    image: await getProfilePicture()
                };
            }
            return session
        } 
    }
})

export { handler as GET, handler as POST }
