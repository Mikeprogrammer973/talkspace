
import { ArrowRightIcon, AtSymbolIcon } from "@heroicons/react/16/solid";
import { IdentificationIcon, KeyIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import { Button } from "../global/button";
import LogoBanner from "../global/logo-banner";
import Link from "next/link";

export default function RegisterForm()
{
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <LogoBanner />
            <div className="mx-auto flex h-screen items-center justify-center">
                <form className="max-w-[800px] p-5">
                <p className="text-3xl my-8 font-semibold text-center">Create account</p>
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
                <div>
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
                            type="fullName"
                            name="fullName"
                            placeholder="Enter your Full Name"
                            required
                        />
                        <IdentificationIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-gray-600" />
                    </div>
                </div>
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
                <Button className="my-8 w-full justify-center">
                    Sign up <ArrowRightIcon className="w-7 pl-2" />
                </Button>
                <div className="p-4 text-center text-gray-400">
                    Have an account? <Link className="text-blue-500 font-semibold" href={"/"}>Log in</Link>
                </div>
                </form>
            </div>
        </div>
    )
}