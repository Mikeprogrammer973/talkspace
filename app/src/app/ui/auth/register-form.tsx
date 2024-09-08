"use client"

import { ArrowRightIcon, AtSymbolIcon } from "@heroicons/react/16/solid";
import { IdentificationIcon, KeyIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import { Button } from "../global/button";
import LogoBanner from "../global/logo-banner";
import Link from "next/link";
import { UserState, create } from "tspace/app/lib/user";
import { useFormState } from "react-dom";
import { ReactNode, useState } from "react";
import Spinner from "../global/spinner";
import { Alert } from "../global/alert";
import { redirect } from "next/navigation";
import MsgBox from "../global/msgBox";

export default function RegisterForm()
{
    const initialState: UserState = {message: {}, errors: {}}
    const [spinnerV, setSpinnerV] = useState<boolean>(false)
    const [state, formAction] = useFormState(create, initialState)

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <LogoBanner />
            <div className="mx-auto flex h-screen items-center justify-center">
                <form onSubmit={(e)=>{
                    setSpinnerV(true)
                    setTimeout(()=>{
                        setSpinnerV(false)
                    }, 3000)
                }} action={formAction} className="max-w-[800px] p-5">
                    <Spinner visible={spinnerV} label="Processing..." />
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