import ResetPasswordForm from "tspace/app/ui/auth/reset-password";

export default function Page({params}: {params: {username: string, authCode: string} })
{
    return (
        <ResetPasswordForm />
    )
}