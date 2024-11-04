import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { getByEmail, getByUsername } from "tspace/app/lib/user";
import SettingsPage from "tspace/app/ui/dashboard/settings/settings";

export const metadata: Metadata = {
    title: "Settings"
}

export default async function Settings()
{
    const session = await getServerSession()
    const profile = await getByUsername((await getByEmail(session?.user.email as string))?.profiles[0].username as string)
    return <SettingsPage profile={profile} />
}