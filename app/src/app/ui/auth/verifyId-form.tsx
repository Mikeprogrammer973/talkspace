"use client"
import { FormEvent, useEffect, useState } from "react";
import send from "tspace/app/lib/util/mail";
import EmailTemplate from "tspace/app/lib/util/mail/template";
import MsgBox from "../global/msgBox";
import { Alert } from "../global/alert";
import Spinner from "../global/spinner";
import { Button } from "../global/button";
import { validVerificationCode } from "tspace/app/lib/user";
import { useRouter } from "next/navigation";

type User =  {
    id: number;
    email: string;
    name: string | null;
    username: string;
    password: string;
    verified: boolean;
    verificationCode: string | null;
    emailVerified: Date | null;
    createdAt: Date;
    updatedAt: Date;
} | null

export default function VerifyIdForm({user}: {user: User})
{
    const [verificationCode, setVerificationCode] = useState('')
    const [ visible, setV ] = useState(false)
    const [ visible2, setV2 ] = useState(true)
    const [ spinnerV, setSpinnerV ] = useState(false)
    const router = useRouter()

    async function sendVerificationCode()
    {
        setSpinnerV(true)
        await new Promise(revolve => setTimeout(revolve, 3000))
        await send({
            to: user?.email as string,
            subject: "Verify your Identity",
            html: EmailTemplate.getTemplate(EmailTemplate.verifyIdTemplate(user?.username as string, user?.verificationCode as string))
        })
        setSpinnerV(false)
        setV(true)
    }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSpinnerV(true)
    if(!(await validVerificationCode(user?.username as string, verificationCode)))
    {
        router.push("/auth/error")
    } else {
        router.push("/")
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
        <Spinner visible={spinnerV} label="" />
        <MsgBox visible={visible} msg={<Alert color="info" title="" msg="Verification code sent!" />} setVisible={setV} />
        <MsgBox visible={visible2} msg={<Button onClick={()=>{
                setV2(false)
                sendVerificationCode()
            }}>Send Verification Code</Button>
        } setVisible={setV2} />
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Verify Your Identity</h1>
            <p className="text-gray-600 text-center mb-4">
            Please enter the 10-digit code sent to your email.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700">
                Verification Code
                </label>
                <input
                id="verificationCode"
                name="verificationCode"
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                maxLength={10}
                minLength={10}
                className="mt-1 block w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter code"
                required
                />
            </div>
            <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Verify
            </button>
            </form>
            <p className="text-sm text-gray-500 text-center mt-6">
            Didn't receive a code? <button onClick={()=>sendVerificationCode()} className="text-indigo-600 hover:underline">Resend</button>
            </p>
        </div>
    </div>
  )
}