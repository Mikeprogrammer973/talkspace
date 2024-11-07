"use client"
import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react";
import send from "tspace/app/lib/util/mail";
import EmailTemplate from "tspace/app/lib/util/mail/template";
import MsgBox from "../global/msgBox";
import { Alert } from "../global/alert";
import Spinner from "../global/spinner";
import { Button } from "../global/button";
import { getByEmail, validVerificationCode } from "tspace/app/lib/user";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { signIn } from "next-auth/react";

export default async function VerifyIdForm({email, password, setPage}: {email: string, password: string, setPage: Dispatch<SetStateAction<number>>})
{
    const [ visible, setV ] = useState(false)
    const [ visible2, setV2 ] = useState(true)
    const [ spinnerV, setSpinnerV ] = useState(false)
    const router = useRouter()

    const user = await getByEmail(email)

    async function sendVerificationCode()
    {
        setSpinnerV(true)
        await new Promise(revolve => setTimeout(revolve, 3000))
        await send({
            to: user?.email as string,
            subject: "Verify your Identity",
            html: EmailTemplate.getTemplate(EmailTemplate.verifyIdTemplate(user?.profiles[0].username as string, user?.verificationCode as string))
        })
        setSpinnerV(false)
        setV(true)
    }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSpinnerV(true)
    if(!(await validVerificationCode(user?.email as string, (new FormData(e.currentTarget)).getAll("verificationCode")[0] as string)))
    {
        router.push("/auth/error")
    } else {
        const result = await signIn("credentials", {
            redirect: false,
            email,
            password
        })

        if(result?.error)
        {
            router.push(`/auth/error`)
        } else {
            router.push("/")
        }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
        <Spinner visible={spinnerV} label="" />
        <MsgBox visible={visible} msg={<Alert color="info" title="" msg={<div className="text-sm md:text-lg">Verification code sent!</div>} />} setVisible={setV} />
        <MsgBox visible={visible2} msg={<Button onClick={()=>{
                setV2(false)
                sendVerificationCode()
            }}>Send Verification Code</Button>
        } setVisible={setV2} />
        <div className="max-w-md w-full p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-200 text-center mb-6">Verify Your Identity</h1>
            <p className="text-gray-400 text-center mb-4">
                Please enter the 10-digit code sent to your email.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <input
                id="verificationCode"
                name="verificationCode"
                type="text"
                maxLength={10}
                minLength={10}
                className="mt-1 text-center block w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
            <p className="text-sm text-gray-300 text-center mt-6">
            Didn't receive a code? <button onClick={()=>sendVerificationCode()} className="text-indigo-600 hover:underline">Resend</button>
            </p>
            <Button onClick={()=>setPage(0)} className="my-5 bg-transparent">
                <ArrowLeftIcon title="Back" fill="white" className="w-8" />
            </Button>
        </div>
    </div>
  )
}