import { Metadata } from "next"
import { revalidatePath } from "next/cache"
import { signOut } from "tspace/app/lib/user/auth/auth"

export const metadata: Metadata = {
    title: "Dashboard"
}

export default function Page()
{
    return (
        <div>
            DASHBOARD PAGE
            <br />
            <form action={async()=>{
                "use server"
                await signOut()
            }}><button>Log out</button></form>
        </div>
    )
}