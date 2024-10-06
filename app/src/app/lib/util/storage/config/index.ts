import { Storage } from "megajs"

export const storage = new Storage({
    email: process.env.MEGA_STORAGE_EMAIL as string,
    password: process.env.MEGA_STORAGE_PASS as string
})