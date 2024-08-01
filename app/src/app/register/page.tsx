import { Metadata } from "next"
import RegisterForm from "../ui/auth/register-form"
//import User from "../lib/user"

export const metadata: Metadata = {
    title: "Create account"
}

export default async function Page()
{
    return (
        <div>
            <RegisterForm />
        </div>
    )
}