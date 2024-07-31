import { Metadata } from "next"
import RegisterForm from "../ui/auth/register-form"
//import User from "../lib/user"

export const metadata: Metadata = {
    title: "Create account"
}

export default async function Page()
{
    //const users = await new User().all()

    return (
        <div>
            {/* {<img src="lib/util/generate/user/profile/image" alt="" className="bg-red-400 w-20 h-20 rounded-full" />} */}
            {
                // users.map(user =>{
                //     return <p key={user.id}>
                //         {user.name}
                //     </p>
                // })
            }
            <RegisterForm />
        </div>
    )
}