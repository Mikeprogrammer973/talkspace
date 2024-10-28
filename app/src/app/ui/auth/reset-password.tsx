import { FormEvent, ReactNode, useState } from "react";
import MsgBox from "../global/msgBox";
import Spinner from "../global/spinner";
import { Alert } from "../global/alert";

export default function ResetPasswordForm({username}: {username: string})
{
    const [msgV, setNsgV] = useState(false)
    const [msg, setNsg] = useState<ReactNode>()
    const [spinnerV, setSpinnerV] = useState(false)
    
    async function handleSubmit(e: FormEvent<HTMLFormElement>)
    {
        setSpinnerV(true)
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        if(data.get("new-password") !== data.get("confirm-password"))
        {
            setNsg(<Alert color="warning" msg={<div className="text-sm md:text-lg font-semibold">Passwords must match!</div>} title="" />)
            setNsgV(true)
            setSpinnerV(false)
            return
        }
    }
    
    return <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-gray-800 m-5 text-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6">
            <MsgBox msg={msg} setVisible={setNsgV} visible={msgV} />
            <Spinner label="Processing..." visible={spinnerV} />
            <h1 className="text-3xl font-bold text-center">Change Your Password</h1>
            <p className="text-center text-gray-400">
                Enter your new password below. Make sure it’s strong!
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
            
                <div>
                    <label htmlFor="new-password" className="block text-sm font-medium text-gray-300">
                        New Password
                    </label>
                    <input
                        type="password"
                        name="new-password"
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
                        name="confirm-password"
                        id="confirm-password"
                        className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Confirm new password"
                        required
                    />
                </div>
                <br />
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