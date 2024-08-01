import NextAuth from "next-auth";
import { authConfig } from "./config/auth.config";
import { z } from 'zod'
import { getByUsername } from "..";
import { compare } from "bcryptjs";
import Credentials from 'next-auth/providers/credentials'

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials){
                const parsedCreds = z.object({
                    username: z.string().trim(),
                    password: z.string().min(8)
                }).safeParse(credentials)

                console.log(parsedCreds)
                
                if(parsedCreds.success)
                {
                    const {username, password} = parsedCreds.data

                    const user = await getByUsername(username)
                    if(!user) return null
                    const passwordsMatch = await compare(password, user.password)

                    if(passwordsMatch) return {}
                }

                return null
            }
        })
    ]
})

