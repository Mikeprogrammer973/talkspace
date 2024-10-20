
export default function ResetPasswordForm()
{
    return <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-gray-800 m-5 text-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6">
        
            <h1 className="text-3xl font-bold text-center">Change Your Password</h1>
            <p className="text-center text-gray-400">
                Enter your new password below. Make sure it’s strong!
            </p>

            <form className="space-y-4">
            
                <div>
                <label htmlFor="new-password" className="block text-sm font-medium text-gray-300">
                    New Password
                </label>
                <input
                    type="password"
                    id="new-password"
                    className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter new password" pattern="^(?=.*[A-Z].*[A-Z])(?=.*[\W_]).+$" title="Must contain at least two uppercase letters and one special character!"
                    minLength={8}
                    required
                />
                </div>
                <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300">
                    Confirm Password
                </label>
                <input
                    type="password"
                    id="confirm-password"
                    className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Confirm new password"
                    required
                />
                </div>

                <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition duration-300"
                >
                    Change Password
                </button>
            </form>
        </div>
    </div>
}