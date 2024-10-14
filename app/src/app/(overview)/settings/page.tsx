import { Metadata } from "next";
import SettingsPage from "tspace/app/ui/dashboard/settings/settings";

export const metadata: Metadata = {
    title: "Settings"
}

export default function Settings()
{
    return <SettingsPage />
}