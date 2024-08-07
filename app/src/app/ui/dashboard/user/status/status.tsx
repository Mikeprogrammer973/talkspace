
import { Profile, User } from "@prisma/client"
import Image from "next/image"
import { useState } from "react"
import { StatusView } from "./statusView"
import MsgBox from "../../../global/msgBox"

type UserData = {
    user: User & Profile | null
}

export function Status(data: UserData)
{
    const [visible, setVisible] = useState<boolean>(false)
    return (
        <div className="w-16">
            <MsgBox status={true} visible={visible} setVisible={setVisible} msg={<StatusView />} />
            <div onClick={()=>setVisible(true)} className="cursor-pointer">
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
        </div>
    )
}