import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { get } from "tspace/app/lib/user/profile";
import Dashboard from "tspace/app/ui/dashboard/profile/dashboard";

export const metadata: Metadata = {
  title: "Profile"
}

export default async function Page()
{
    const session = await getServerSession();

  if (!session) {
    return <div>Auth Error!</div>;
  }

  const profile = await get()

  return (
    <Dashboard profile={profile} />
  )
}