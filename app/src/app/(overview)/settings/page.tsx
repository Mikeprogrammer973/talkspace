import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { getByEmail } from "tspace/app/lib/user";
import SettingsPage from "tspace/app/ui/dashboard/settings/settings";

export const metadata: Metadata = {
    title: "Settings"
}

export default async function Settings()
{
    const session = await getServerSession()
    const user = await getByEmail(session?.user.email as string)
    return <SettingsPage user_={user} />
}