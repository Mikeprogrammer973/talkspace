import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialProvider from 'next-auth/providers/credentials'
import { getByUsername } from "tspace/app/lib/user";
import { compare } from "bcryptjs";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

const handler = NextAuth(
    {
        adapter: PrismaAdapter(prisma),
        providers: [
            CredentialProvider({
                name: "Credentials",
                credentials: {
                    username: {
                        label: "Username",
                        type: "text"
                    },
                    password: {
                        label: "Password",
                        type: "password"
                    }
                },
                async authorize(credentials)
                {
                    const user = await getByUsername(credentials.username as string)

                    if(user && credentials.password)
                    {
                        const isValid = await compare(credentials.password as string, user.password)

                        if(isValid) return user as any
                    }

                    return null
                }
            })
        ],
        session: {
            strategy: "jwt"
        },
        secret: process.env.AUTH_SECRET,
        callbacks: {
            async jwt({ token, user })
            {
                if(user)
                {
                    token.id = user.id
                }
                
                return token
            },
            async session({ session, token })
            {
                if(token)
                {
                    session.user.id = token.id as string
                }

                return session
            }
        },
        pages: {
            signIn: "auth/signin",
            newUser: "auth/signup"
        }
    }
)

export function GET()
{
    return NextResponse.bind(handler)
}

export function POST()
{
    return NextResponse.bind(handler)
}

