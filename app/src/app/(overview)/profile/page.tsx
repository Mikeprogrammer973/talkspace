import { AdjustmentsHorizontalIcon, ArrowLeftStartOnRectangleIcon, BookmarkIcon, FilmIcon, PencilSquareIcon, TableCellsIcon } from "@heroicons/react/20/solid";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";
import { getByEmail } from "tspace/app/lib/user";
import Dashboard from "tspace/app/ui/dashboard/profile/dashboard";

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