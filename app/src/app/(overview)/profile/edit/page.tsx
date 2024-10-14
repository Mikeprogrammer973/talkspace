import { ArrowLeftCircleIcon } from "@heroicons/react/20/solid";
import { Profile, User } from "@prisma/client";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { getByEmail } from "tspace/app/lib/user";
import EditForm from "tspace/app/ui/dashboard/profile/edit/edit-form";

export const metadata: Metadata = {
    title: "Edit Profile"
  }

const UserProfileEdit = async () => {
    const session = await getServerSession()
    const user = await getByEmail(session?.user.email as string)

   return (
    <div className="bg-gray-900">
        <button title="Back" className="p-5 text-gray-300 hover:text-gray-100 sticky top-0">
            <Link href={"/profile"}>
                <ArrowLeftCircleIcon fill="currentColor" className="w-10" />
            </Link>
        </button>
        <EditForm user={user} />
    </div>
   )
};

export default UserProfileEdit;
