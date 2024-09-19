"use client"
import { FormEvent, useEffect, useState } from "react";
import send from "tspace/app/lib/util/mail";
import EmailTemplate from "tspace/app/lib/util/mail/template";
import MsgBox from "../global/msgBox";

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

    async function sendVerificationCode()
    {
        await send({
            to: user?.email as string,
            subject: "Verify your Identity",
            html: EmailTemplate.getTemplate(EmailTemplate.verifyIdTemplate(user?.username as string, user?.verificationCode as string))
        })
        setV(true)
    }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para validar o código de verificação
    console.log('Verification Code Submitted:', verificationCode);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
        <MsgBox visible={visible} msg={<div>Verification code sent!</div>} setVisible={setV} />
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