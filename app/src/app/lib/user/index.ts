"use server"

import { PrismaClient } from "@prisma/client"
import { compare, genSalt, hash } from "bcryptjs"
import { z } from 'zod'
import { verificationCode } from "../util/generate/user/verification/code"
import { getServerSession } from "next-auth"
import { FolderPath, Mega } from "../util/storage"
import { redirect } from "next/dist/client/components/navigation.react-server"
import { Language } from "../util/user/preference/language"
import { RegionFormat } from "../util/user/preference/region_format"
import { FontSize } from "../util/user/preference/font_size"
import { get } from "./profile"

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
        if((await get(username)) != null)
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
                password: await hash(password, await genSalt(15)),
                profiles: {
                    create: {
                        username: username,
                        preference: {
                            create: {
                                private: false,
                                language: Language.English,
                                region_format: RegionFormat["United States"],
                                font_size: FontSize.Small,
                                theme: "DARK"
                            }
                        }
                    }
                }
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

export async function update(data: {name: string | null, email: string, username: string, bio: string | null, picture: string | null})
{
    const user = await getByEmail((await getServerSession())?.user.email as string)

    const img_name = data.picture && `${data.username}_profile_picture.${data.picture.split(';')[0].split(':')[1].split('/')[1]}`
    if(data.picture)
    {
        if(user?.profiles[0].imageId !== null)
        {
            await new Mega().delete(FolderPath.PROFILES, (await prisma.image.findFirst({where: {id: user?.profiles[0].imageId as number}}))?.name as string)
        }
        await new Mega().upload(FolderPath.PROFILES, {name: img_name as string, data: data.picture.split(',')[1]})
    }

    if(user?.email !== data.email && (await getByEmail(data.email)) !== null)
    {
      redirect("/error?error=Email address already in use!")
    }

    if(user?.profiles[0].username !== data.username && (await get(data.username)) !== null)
    {
      redirect("/error?error=Username already in use. You must choose another one!")
    }

    await prisma.profile.update({where: {username: user?.profiles[0].username as string}, data: {
        username: data.username,
        bio: data.bio,
        user: {
            update: {
                name: data.name,
                email: data.email
            }
        },
        image: data.picture ? {
            upsert: {
                update: {
                    type: data.picture.split(',')[0],
                    name: img_name as string
                },
                create: {
                    type: data.picture.split(',')[0],
                    name: img_name as string
                }
            } 
        }: undefined
    }})

    redirect("/profile")
}

export async function verifyCreds(username: string, passsword: string)
{
    const profile = await get(username)

    if(profile !== null && profile.type === "Main")
    {
        if(await compare(passsword, profile.user.password)) {
            await setVerificationCode(profile.user.email)
            return true
        }
    }

    return false
}

export async function verifyResetPwdCreds(username: string, token: string)
{
    let msg_error = "Something went wrong!"

    const profile = await get(username)

    if(!profile)
    {
        msg_error = `We were unable to verify your identity: '${username}' is not a valid username!`
        redirect(`/auth/error?error=${msg_error}`)
    }

    if(profile.user.emailVerified !== token)
    {
        msg_error = `We were unable to verify your identity: '${token}' is not a valid token! You must request another reset link!`
        redirect(`/auth/error?error=${msg_error}`)
    }
}

export async function setVerificationCode(email: string) {
    return await prisma.user.update({where: {email: email}, data: {verificationCode: verificationCode().join('')}})
}

export async function updatePassword(username: string, new_password: string)
{
    await prisma.profile.update({where: {username: username}, data: {user: {update: {password: await hash(new_password, await genSalt(15)), emailVerified: verificationCode().join('')}}}})

    return true
}

export async function setResetPwdToken(user_mail: string) {
    const user = await getByEmail(user_mail)

    if(!user) return false

    const token = verificationCode().join('')

    await prisma.user.update({where: {email: user_mail}, data: {emailVerified: token}})

    return {username: user.profiles[0].username, token: token}
}

export async function validVerificationCode(email: string, verificationCode: string)
{
    const user = await prisma.user.findFirst({where: { email: email, verificationCode: verificationCode }})

    if(user !== null) return true

    return false
}

export async function verifyId(passsword: string) {
    const user = await prisma.user.findFirst({where: {email: (await getServerSession())?.user.email}})

    return (await compare(passsword, user?.password as string))
}

export async function getByEmail(email: string) {
    return await prisma.user.findFirst({where: {email: email}, include: {profiles: true}})
}

export async function getById(id: number) {
    return await prisma.user.findFirst({where: {id: id}, include: {profiles: true}})
}

