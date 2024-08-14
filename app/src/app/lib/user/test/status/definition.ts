
export type UserStatus = {
    type: "video" | "image",
    src: string,
    prms?: {
        currentTime: number,
        duration: number
    }
}