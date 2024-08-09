
import { ArrowRightIcon, AtSymbolIcon } from "@heroicons/react/16/solid";
import { KeyIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import { Button } from "../global/button";
import LogoBanner from "../global/logo-banner";
import Link from "next/link";
import { useFormState } from "react-dom";
import { authenticate } from "tspace/app/lib/user";
import { Alert } from "../global/alert";
import Spinner from "../global/spinner";
import { useState } from "react";

export default function LoginForm()
{
    const [errorMessage, formAction, isPending] = useFormState(authenticate, undefined)
    const [spinnerV, setSpinnerV] = useState<boolean>(true)

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <LogoBanner />
            <div className="mx-auto flex h-screen items-center justify-center">
                <form action={formAction} className="max-w-[800px] p-5">
                    {isPending && <Spinner visible={spinnerV} label="Processing..." />}
                    {errorMessage && <Alert title="" color="danger" msg={<div className="font-light text-lg">{errorMessage}</div>} />}
                    <p className="text-3xl my-8 font-semibold text-center">Log in into your account</p>
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
                            type="username"
                            name="username"
                            placeholder="Enter your username"
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
                            placeholder="Enter your password"
                            required
                        />
                        <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-gray-600" />
                        </div>
                    </div>
                    <Button className="my-8 w-full justify-center" aria-disabled={isPending}>
                        Log in <ArrowRightIcon className="w-7 pl-2" />
                    </Button>
                    <div className="p-4 text-center text-gray-400">
                        Don&apos;t have an account? <Link className="text-blue-500 font-semibold" href={"register"}>Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}