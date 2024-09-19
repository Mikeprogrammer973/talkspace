import { getByUsername, setVerificationCode } from "tspace/app/lib/user";
import VerifyIdForm from "tspace/app/ui/auth/verifyId-form";

export default async function VerifyId({ params }: { params: { username: string } })
{
    let user = await getByUsername(params.username)

    if(user?.verificationCode === null)
    {
        user = await setVerificationCode(params.username)
    }

    return (
        <div>
            <VerifyIdForm user={user} />
        </div>
    )
}