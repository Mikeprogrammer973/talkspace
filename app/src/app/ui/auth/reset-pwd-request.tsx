import { FormEvent, ReactNode, useState } from "react";
import { setResetPwdToken } from "tspace/app/lib/user";
import send from "tspace/app/lib/util/mail";
import EmailTemplate from "tspace/app/lib/util/mail/template";
import MsgBox from "../global/msgBox";
import { Alert } from "../global/alert";
import Spinner from "../global/spinner";

export default function ResetPasswordRequestForm()
{
    const [msgV, setNsgV] = useState(false)
    const [msg, setNsg] = useState<ReactNode>()
    const [spinnerV, setSpinnerV] = useState(false)

    async function handleSubmit(e: FormEvent<HTMLFormElement>)
    {
        setSpinnerV(true)
        e.preventDefault()
        const user_mail = new FormData(e.currentTarget).get("email")
        const res = await setResetPwdToken(user_mail as string)

        if(res === false)
        {
            setNsg(<Alert color="danger" msg={<div className="text-sm md:text-lg font-semibold">Invalid email address; user not found!</div>} title="" />)
            setNsgV(true)
            setSpinnerV(false)
            return
        }

        const domains = ["http://localhost:3000/auth/reset-password/", "http://talkspace-ten.vercel.app/auth/reset-password/"]

        const msg_mail = EmailTemplate.getTemplate(EmailTemplate.resetPasswordTemplate(res.username, `${domains[0]}${res.username}/${res.token}`))

        await send({
            to: user_mail as string,
            html: msg_mail,
            subject: "Password Reset Request"
        })

        setNsg(<Alert color="info" msg={<div className="text-sm md:text-lg font-semibold">Reset link sent successfully!</div>} title="" />)
        setNsgV(true)
        
        setSpinnerV(false)
    }

    return <div onClick={(e)=> e.stopPropagation()} className="m-5 flex items-center justify-center">
        <div className="text-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6">
            <MsgBox visible={msgV} setVisible={setNsgV} msg={msg} />
            <Spinner label="Sending..." visible={spinnerV} />
            <h1 className="text-3xl font-bold text-center">Reset Your Password</h1>
            <p className="text-center text-gray-400">
                Forgot your password? No worries! Enter your email below, and we’ll send you a link to reset your password.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="mb-3">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="you@example.com"
                        required
                    />
                </div>
                <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition duration-300"
                >
                Send Reset Link
                </button>
            </form>
        </div>
  </div>
}