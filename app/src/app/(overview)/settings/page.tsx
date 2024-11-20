import { Metadata } from "next";
import { get } from "tspace/app/lib/user/profile";
import SettingsPage from "tspace/app/ui/dashboard/settings/settings";

export const metadata: Metadata = {
    title: "Settings"
}

export default async function Settings()
{
    const profile = await get()
    return <SettingsPage profile={profile} />
}