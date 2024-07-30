import { Metadata } from "next"
import RegisterForm from "../ui/auth/register-form"

export const metadata: Metadata = {
    title: "Create account"
}

export default function Page()
{
    return (
        <div>
            <RegisterForm />
        </div>
    )
}