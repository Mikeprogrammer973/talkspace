"use client"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { update, verifyId } from "tspace/app/lib/user";
import { Button } from "tspace/app/ui/global/button";
import Spinner from "tspace/app/ui/global/spinner";

export default function EditForm({profile}: {profile: any})
{
  const [name, setName] = useState<string>(profile.user.name || "")
  const [email, setEmail] = useState<string>(profile.user.email)
  const [username, setUsername] = useState<string>(profile.username || "username")
  const [bio, setBio] = useState<string>(profile.bio || 'This is my bio.')
  const [profilePic, setProfilePic] = useState(useSession().data?.user.image)
  const [picData, setPicData] = useState<string>('')
  const [page, setPage] = useState(0)
  const [pass, setPass] = useState('')
  const [spinnerV, setSpinnerV] = useState(false)
  const router = useRouter()

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.currentTarget.files)
    {
        const file = e.currentTarget.files[0];
        if (file.type.startsWith("image")) {
          setProfilePic(URL.createObjectURL(file))
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = (e)=>{
            setPicData(e.target?.result as string)
          }
        } else {
          alert("Invalid profile image")
        }
    }
    
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPage(1)
  };

  const submitChanges = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSpinnerV(true)
    if(await verifyId(pass)) 
    {
      await update({name: name, username: username, email: email, picture: picData, bio: bio})
    } else {
      router.push('/error')
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-6">
      <Spinner visible={spinnerV} label={""} />
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-white mb-6">Edit Your Profile</h1>

        {page === 0 && <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture */}
          <div className="text-center">
            <img
              src={profilePic || 'https://via.placeholder.com/250'}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <label className="block text-sm font-medium text-gray-300">Profile Picture</label>
            <div className="relative mt-2">
              <input
                type="file"
                id="profilePic"
                accept="image/*"
                onChange={handleProfilePicChange}
                className="hidden"
              />
              <label
                htmlFor="profilePic"
                className="cursor-pointer bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
              >
                Choose File
              </label>
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Username</label>
            <input
              type="text"
              value={username}
              required
              pattern="^[^\s]+$" title="No spaces allowed!"
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter a new username"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows={4}
              placeholder="Tell us about yourself"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
            >
              Next <ArrowRightIcon className="w-5 inline" />
            </button>
          </div>
        </form>}

        {page === 1 && <div className="max-w-md w-full p-8">
            <h1 className="text-xl font-bold text-gray-200 text-center mb-6">Confirm Your Identity</h1>
            <p className="text-gray-400 text-center mb-4">
                Please enter your password.
            </p>
            <form onSubmit={submitChanges} className="space-y-6">
            <div>
                <input
                id="password"
                name="password"
                type="password"
                minLength={8}
                value={pass}
                onChange={(e)=>setPass(e.target.value)}
                className="mt-1 block text-center w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter password"
                required
                />
            </div>
            <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Finalize
            </button>
            </form>
            <Button onClick={()=>setPage(0)} className="my-5 bg-transparent">
                <ArrowLeftIcon title="Back" fill="white" className="w-8" />
            </Button>
        </div>}
      </div>
    </div>
  );
}