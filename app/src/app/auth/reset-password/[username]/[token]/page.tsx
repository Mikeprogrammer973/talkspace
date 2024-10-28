import { verifyResetPwdCreds } from "tspace/app/lib/user";
import ResetPasswordForm from "tspace/app/ui/auth/reset-password";

export default async function Page({params}: {params: {username: string, token: string} })
{
    await verifyResetPwdCreds(params.username, params.token)
    return (
        <ResetPasswordForm />
    )
}