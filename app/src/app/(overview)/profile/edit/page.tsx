import { ArrowLeftCircleIcon } from "@heroicons/react/20/solid";
import { Metadata } from "next";
import Link from "next/link";
import { get } from "tspace/app/lib/user/profile";
import EditForm from "tspace/app/ui/dashboard/profile/edit/edit-form";

export const metadata: Metadata = {
    title: "Edit Profile"
  }

const UserProfileEdit = async () => {
    const profile = await get()

   return (
    <div className="bg-gray-900 p-5">
        <button title="Back" className="p-5 text-gray-300 hover:text-gray-100 sticky top-0">
            <Link href={"/profile"}>
                <ArrowLeftCircleIcon fill="currentColor" className="w-10" />
            </Link>
        </button>
        <EditForm profile={profile} />
    </div>
   )
};

export default UserProfileEdit;
