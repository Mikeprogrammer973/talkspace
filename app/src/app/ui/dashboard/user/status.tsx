import { Profile, User } from "@prisma/client"
import Image from "next/image"

type UserData = {
    user: User & Profile | null
}

export function Status(data: UserData)
{
    return (
        <div className="w-16 cursor-pointer">
            <div className="p-1 h-16 rounded-full border-2 overflow-hidden">
                <Image
                    alt="profile_user"
                    src={"/lib/util/generate/user/profile/image"}
                    width={150}
                    height={150}
                    className="rounded-full bg-slate-200 h-full w-full"
                />
            </div>
            <p className="overflow-hidden overflow-ellipsis">peter_morningstar_007</p>
        </div>
    )
}