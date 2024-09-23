"use client"

import { ArrowRightIcon, AtSymbolIcon } from "@heroicons/react/16/solid";
import { IdentificationIcon, KeyIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import { Button } from "../global/button";
import LogoBanner from "../global/logo-banner";
import Link from "next/link";
import { UserState, create } from "tspace/app/lib/user";
import { useFormState } from "react-dom";
import { useRef, useState } from "react";
import Spinner from "../global/spinner";
import { Alert } from "../global/alert";
import MsgBox from "../global/msgBox";
import send from "tspace/app/lib/util/mail";
import EmailTemplate from "tspace/app/lib/util/mail/template";

export default function RegisterForm()
{
    const initialState: UserState = {message: {}, errors: {}}
    const [spinnerV, setSpinnerV] = useState<boolean>(false)
    const [state, formAction] = useFormState(create, initialState)
    const [visible, setVisible] = useState(true)
    const email = useRef<HTMLInputElement>(null)
    const username = useRef<HTMLInputElement>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSpinnerV(true)
    
        const formData = new FormData(e.currentTarget)
    
        setTimeout(()=>{
            try {
                formAction(formData)
            } catch (error) {
                console.error('Erro ao enviar o formulário', error);
            } finally {
                setSpinnerV(false)
            }
        }, 3000)
    };

    if(state.message?.type === "success")
    {
        send({
            to: email.current?.value as string,
            subject: "Welcome to TalkSpace!",
            html: EmailTemplate.getTemplate(EmailTemplate.welcomeTemplate(username.current?.value as string))
        })
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <LogoBanner />
            <div className="mx-auto flex h-screen items-center justify-center">
                <form onSubmit={handleSubmit} className="max-w-[800px] p-5">
                    {<Spinner visible={spinnerV} label="" />}
                    {state.message?.type === "success" && <MsgBox visible={visible} setVisible={setVisible} msg={
                        <div className="text-center max-w-md p-6 bg-white rounded-lg shadow-lg">
                            <h1 className="text-3xl font-bold text-green-600 mb-4">Account Registration</h1>
                            <p className="text-gray-600 text-lg mb-6">
                                Your has been successfully created! Now you can proceed to the login page by pressing the button bellow.
                            </p>
                            <a href="/signin" className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700">
                            Start Now
                            </a>
                            <p className="text-gray-500 text-sm mt-6">
                            Need help? <a href="/support" className="text-indigo-600 hover:underline">Contact Support</a>
                            </p>
                        </div>
                    } />}
                    <p className="text-3xl my-8 font-semibold text-center">Create account</p>
                    {state.message?.content && <Alert title="" msg={<p className="font-semibold">{state.message.content}</p>} color={state.message.type || "danger"} />}
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 text-gray-600 placeholder:text-gray-400"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                ref={email}
                                required
                            />
                            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-gray-600" />
                        </div>
                    </div>
                    {/* <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium"
                            htmlFor="Full Name"
                        >
                            Full Name
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 text-gray-600 placeholder:text-gray-400"
                                id="fullName"
                                type="text"
                                name="fullName"
                                placeholder="Enter your Full Name"
                                required
                            />
                            <IdentificationIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-gray-600" />
                        </div>
                    </div> */}
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 text-gray-600 placeholder:text-gray-400"
                                id="username"
                                type="text"
                                name="username"
                                placeholder="Enter your username" pattern="^[^\s]+$" title="No spaces allowed!"
                                ref={username}
                                required
                            />
                            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-gray-600" />
                        </div>
                    </div>
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 text-gray-600 placeholder:text-gray-400"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter your password" pattern="^(?=.*[A-Z].*[A-Z])(?=.*[\W_]).+$" title="Must contain at least two uppercase letters and one special character!" 
                                minLength={8}
                                required
                            />
                        <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-gray-600" />
                        </div>
                    </div>
                    <Button className="my-8 w-full justify-center">
                        Sign up <ArrowRightIcon className="w-7 pl-2" />
                    </Button>
                    <div className="p-4 text-center text-gray-400">
                        Have an account? <Link className="text-blue-500 font-semibold" href={"signin"}>Sign in</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}