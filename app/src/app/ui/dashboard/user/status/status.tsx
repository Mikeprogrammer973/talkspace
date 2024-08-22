import { Profile, User } from "@prisma/client"
import Image from "next/image"
import { useState } from "react"
import { StatusView } from "./statusView"
import MsgBox from "../../../global/msgBox"
import { userStatus } from "tspace/app/lib/user/test/status/data"
import { ProfileIcon } from "../util/profile_icon"

type UserData = {
    user: User & Profile | null
}

export function Status(data: UserData)
{
    const [visible, setVisible] = useState<boolean>(false)
    return (
        <div className="w-16">
            <MsgBox status={true} visible={visible} setVisible={setVisible} msg={<StatusView userStatus={userStatus} />} />
            <div onClick={()=>setVisible(true)} className="cursor-pointer">
                <ProfileIcon 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKhSSwriyDJ4jG9pHgrfUFjfM3jbemkw0Jw&s"
                    size={{width: 4, height: 4}}
                    border={true}
                />
                <p className="overflow-hidden overflow-ellipsis">peter_morningstar_007</p>
            </div>
        </div>
    )
}