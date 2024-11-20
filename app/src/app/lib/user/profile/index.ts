"use server"

import { PrismaClient } from "@prisma/client"
import { getServerSession } from "next-auth"
import { FolderPath, Mega } from "../../util/storage"
import { Language } from "../../util/user/preference/language"
import { RegionFormat } from "../../util/user/preference/region_format"
import { FontSize } from "../../util/user/preference/font_size"

const prisma = new PrismaClient()

export async function get(username?: string) {
    const username_ = username || (await getServerSession())?.user.username
    return await prisma.profile.findFirst({where: {username: username_}, include: {user: true, image: true, followers: true, following: true, posts: true, preference: true}})
}

export async function picture(username?: string)
{
    const username_ = username || (await getServerSession())?.user.username
    const image = (await get(username_))?.image

    return image ? `${image?.type},${(await new Mega().download(FolderPath.PROFILES, image?.name as string))?.toString('base64')}` : "https://qaziclinic.com/wp-content/uploads/2021/01/img3-5.jpg"
}

export async function update(username?: string) {
    const username_ = username || (await getServerSession())?.user.username
}