"use server"

import { PrismaClient } from "@prisma/client"
import { genSalt, hash } from "bcryptjs"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from 'zod'
import { verificationCode } from "../util/generate/user/verification/code"

const UserFormSchema = z.object(
{
    id: z.number(),
    email: z.string({invalid_type_error: "Please enter a valid email address!"}),
    username: z.string({invalid_type_error: "Please enter a valid username, without blank spaces!"}),
    password: z.string({invalid_type_error: "Must contain at least 8 characters, which include at least two uppercase letters and one special character!"})
})

export type UserState = {
    errors?: {
        email?: string[];
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
            password: formData.get("password")
        }
    )

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
        const {email, username, password} = validatedFields.data
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
                password: await hash(password, await genSalt(15))
            }
        })

        return {
            message: {
                type: "success",
                content: "Account created successfully!"
            }
        }
    }
}

export async function setVerificationCode(username: string) {
    return await prisma.user.update({where: {username: username}, data: {verificationCode: verificationCode.join('')}})
}

export async function validVerificationCode(username: string, verificationCode: string)
{
    const user = await prisma.user.findUnique({where: { username: username, verificationCode: verificationCode }})

    if(user !== null){
        await prisma.user.update({where: { username: username, verificationCode: verificationCode }, data: {verified: true}})
        return true
    }

    return false
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
