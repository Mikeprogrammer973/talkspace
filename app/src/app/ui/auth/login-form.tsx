import { ArrowRightIcon, AtSymbolIcon } from "@heroicons/react/16/solid";
import { KeyIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import { Button } from "../global/button";
import LogoBanner from "../global/logo-banner";
import Link from "next/link";
import { useFormState } from "react-dom";
import { Alert } from "../global/alert";
import Spinner from "../global/spinner";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm()
{
    const [spinnerV, setSpinnerV] = useState<boolean>(false)

    const [username, setUsername] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        setSpinnerV(true)
        const ressult = await signIn("credentials", {
            redirect: false,
            username,
            password
        })

        if(ressult?.error)
        {
            router.push(`/auth/error?error=CredentialsSignin`)
        } else{
            router.push("/")
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <LogoBanner />
            <div className="mx-auto flex h-screen items-center justify-center">
                <form onSubmit={handleSubmit} className="max-w-[800px] p-5">
                    <Spinner visible={spinnerV} label="Processing..." />
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
                            value={username}
                            onChange={(e)=>setUsername(e.currentTarget.value)}
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
                </form>
            </div>
        </div>
    )
}