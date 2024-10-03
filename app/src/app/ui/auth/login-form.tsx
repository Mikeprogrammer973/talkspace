import { ArrowRightIcon, AtSymbolIcon } from "@heroicons/react/16/solid";
import { KeyIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import { Button } from "../global/button";
import LogoBanner from "../global/logo-banner";
import Link from "next/link";
import Spinner from "../global/spinner";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import VerifyIdForm from "./verifyId-form";
import { verifyCreds } from "tspace/app/lib/user";

export default function LoginForm()
{
    const [spinnerV, setSpinnerV] = useState<boolean>(false)

    const [email, setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [page, setPage] = useState(0)
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        setSpinnerV(true)
        const result = await verifyCreds(email, password)

        if(!result)
        {
            router.push(`/auth/error?error=CredentialsSignin`)
        } else{
            setPage(1)
            setSpinnerV(false)
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <LogoBanner />
            <div className="mx-auto flex h-screen items-center justify-center">
                {page === 0 && <form onSubmit={handleSubmit} className="max-w-[800px] p-5">
                    <Spinner visible={spinnerV} label="" />
                    <p className="text-3xl my-8 font-semibold text-center">Log in into your account</p>
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
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={(e)=>setEmail(e.currentTarget.value)}
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
                            value={password}
                            onChange={(e)=>setPassword(e.currentTarget.value)}
                        />
                        <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-gray-600" />
                        </div>
                    </div>
                    <Button className="my-8 w-full justify-center">
                        Sign in <ArrowRightIcon className="w-7 pl-2" />
                    </Button>
                    <div className="p-4 text-center text-gray-400">
                        Don&apos;t have an account? <Link className="text-blue-500 font-semibold" href={"signup"}>Sign up</Link>
                    </div>
                </form>}
                {page === 1 && <VerifyIdForm setPage={setPage} email={email} password={password} />}
            </div>
            
        </div>
    )
}