import { Metadata } from "next"
import RegisterForm from "../ui/auth/register-form"

export const metadata: Metadata = {
    title: "Create account"
}

export default function Page()
{
    return (
        <div>
            {/* {<img src="lib/util/generate/profile" alt="" className="bg-red-400 w-20 h-20 rounded-full" />} */}
            <RegisterForm />
        </div>
    )
}