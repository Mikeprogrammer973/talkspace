"use server"

import { PrismaClient } from "@prisma/client"
import { genSalt, hash } from "bcryptjs"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from 'zod'
import { signIn } from "./auth/auth"
import { AuthError } from "next-auth"

const UserFormSchema = z.object(
{
    id: z.number(),
    email: z.string({invalid_type_error: "Please enter a valid email address!"}),
    fullName: z.string({invalid_type_error: "Pease enter your Full Name"}),
    username: z.string({invalid_type_error: "Please enter a valid username, without blank spaces!"}),
    password: z.string({invalid_type_error: "Must contain at least 8 characters, which include at least two uppercase letters and one special character!"})
})

export type UserState = {
    errors?: {
        email?: string[];
        fullName?: string[];
        username?: string[];
        password?: string[];
    };
    message?: {
        type?: string,
        content?: string
    }
}

const prisma = new PrismaClient()

export async function create(prevState: UserState, formData: FormData)
{
    const validatedFields = UserFormSchema.omit({id: true}).safeParse(
        {
            email: formData.get("email"),
            username: formData.get("username"),
            fullName: formData.get("fullName"),
            password: formData.get("password")
        }
    )
    console.log(validatedFields.error?.flatten().fieldErrors)
    if(!validatedFields.success)
    {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: {
                type: "danger",
                content:  "Missing Fields. Account Creation Failed."
            }
        }
    } else{
        const {email, username, fullName, password} = validatedFields.data
        await prisma.$disconnect()

        // if username already registred
        if((await getByUsername(username)) != null)
        {
            return {
                message: {
                    type: "warning",
                    content: "Username already in use!"
                }
            }
        }    

        // if email address already registred
        if((await getByEmail(email)) != null)
        {
            return {
                message: {
                    type: "warning",
                    content: "Email address already in use!"
                }
            }
        } 

        // insert new user

        await prisma.user.create({
            data:{
                email: email,
                username: username,
                name: fullName,
                password: await hash(password, await genSalt(15)),
                profile: {
                    create: {
                        bio: "New user!"
                    }
                }
            }
        })

        revalidatePath("register")
        redirect("/login?message=reg")
    }
}

export async function authenticate(prevState: string | undefined, formData: FormData) {
    try{
        await signIn("credentials", formData)
    } catch(error){
        if(error instanceof AuthError)
        {
            switch(error.type)
            {
                case 'CredentialsSignin':
                    return 'Invalid credentials!'
                default:
                    return "Something went wrong!"
            }
        }
        throw error
    }
}

export async function getByEmail(email: string) {
    return await prisma.user.findUnique({where: {email: email}})
}

export async function getByUsername(username: string) {
    return await prisma.user.findUnique({where: {username: username}})
}

export async function getById(id: number) {
    return await prisma.user.findUnique({where: {id: id}})
}
