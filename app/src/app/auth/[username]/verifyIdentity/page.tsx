import { getServerSession } from "next-auth";
import { getByUsername } from "tspace/app/lib/user";
import VerifyIdForm from "tspace/app/ui/auth/verifyId-form";

export default async function VerifyId({ params }: { params: { username: string } })
{
    const user = await getByUsername(params.username)

    return (
        <div>
            <VerifyIdForm user={user} />
        </div>
    )
}