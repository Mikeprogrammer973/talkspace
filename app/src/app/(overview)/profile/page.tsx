import { AdjustmentsHorizontalIcon, ArrowLeftStartOnRectangleIcon, BookmarkIcon, FilmIcon, PencilSquareIcon, TableCellsIcon } from "@heroicons/react/20/solid";
import { getServerSession } from "next-auth";
import { getByEmail } from "tspace/app/lib/user";

export default async function Dashboard()
{
    const session = await getServerSession();

  if (!session) {
    return <div>Auth Error!</div>;
  }

  const user = await getByEmail(session.user.email);

  console.log(session)

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-950 shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-6 px-8">
          <h1 className="text-xl font-bold text-white hidden md:block">Account Dashboard</h1>
          <div className="flex items-center space-x-6">
            <img
              src={'https://qaziclinic.com/wp-content/uploads/2021/01/img3-5.jpg'}
              alt={user?.name || 'User'}
              className="rounded-full w-10 h-10"
            />
            <span className="font-semibold">{user?.name || "User"}</span>
            <button title="Edit Profile" className="text-gray-300 hover:text-gray-200">
              <PencilSquareIcon fill="currentColor" className="w-7" />
            </button>
            <button title="Settings" className="text-gray-300 hover:text-gray-200">
              <AdjustmentsHorizontalIcon fill="currentColor" className="w-7" />
            </button>
            <button title="Log out" className="text-gray-300 hover:text-gray-200 md:hidden">
              <ArrowLeftStartOnRectangleIcon fill="currentColor" className="w-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* User Info */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-md">
            <div className="flex flex-col items-center">
              <img
                src={'https://qaziclinic.com/wp-content/uploads/2021/01/img3-5.jpg'}
                alt={user?.name || 'User'}
                className="rounded-full w-32 h-32 mb-6 border-4 border-gray-700"
              />
              <h2 className="text-xl font-bold">{user?.name || "User"}</h2>
              <p className="text-gray-400">@{user?.username || 'username'}</p>
              <p className="text-gray-300 mt-4 text-center">{'Aqui vai a bio do usuário'}</p>
            </div>
            <div className="flex justify-around mt-8">
              <div className="text-center">
                <span className="font-bold text-lg text-white">350</span>
                <p className="text-gray-400">Posts</p>
              </div>
              <div className="text-center">
                <span className="font-bold text-lg text-white">1200</span>
                <p className="text-gray-400">Followers</p>
              </div>
              <div className="text-center">
                <span className="font-bold text-lg text-white">200</span>
                <p className="text-gray-400">Following</p>
              </div>
            </div>
          </div>

          {/* User Posts Grid */}
          <div className="md:col-span-2">
            <div className="flex items-center justify-between my-5">
              <button title="ALL POSTS" className="flex flex-wrap items-center justify-center gap-2 text-gray-100 border-t-2 border-current py-4">
                <TableCellsIcon fill="currentColor" className="w-5" /> ALL
              </button>
              <button title="REELS" className="flex flex-wrap items-center justify-center gap-2 text-gray-400">
                <FilmIcon fill="currentColor" className="w-5" /> REELS
              </button>
              <button title="SAVED POSTS" className="flex flex-wrap items-center justify-center gap-2 text-gray-400">
                <BookmarkIcon fill="currentColor" className="w-5" /> SAVED
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                >
                  <img
                    src={'https://qaziclinic.com/wp-content/uploads/2021/01/img3-5.jpg'}
                    alt={`Postagem ${i + 1}`}
                    className="object-cover w-full h-full hover:scale-105 transition duration-500 ease-in-out rounded-lg cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}