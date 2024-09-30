import { User } from "@prisma/client";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { getByEmail } from "tspace/app/lib/user";
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

  const user: User = await getByEmail(session.user.email) as User;

  console.log(session)

  return (
    <Dashboard user={user} />
  )
}