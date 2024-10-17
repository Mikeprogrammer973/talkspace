import { User } from "@prisma/client";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { getByEmail, getByUsername, getProfilePicture } from "tspace/app/lib/user";
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

  const user = await getByUsername((await getByEmail(session.user.email))?.profiles[0].username as string)

  return (
    <Dashboard user={user} />
  )
}