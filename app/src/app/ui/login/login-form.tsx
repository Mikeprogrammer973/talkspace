
import { ArrowRightIcon, AtSymbolIcon } from "@heroicons/react/16/solid";
import { KeyIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { Button } from "../global/button";

export default function LoginForm()
{
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="hidden lg:flex h-screen items-center justify-center">
                <Image
                alt="hero image"
                src={"/logo/talkspace-banner.png"}
                width={500}
                height={500}
                />
            </div>
            <div className="mx-auto flex h-screen items-center justify-center">
                <form className="min-w-[300px] max-w-[800px]">
                <p className="text-3xl my-8 font-semibold">Log in into your account</p>
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
                        placeholder="Enter your username address"
                        required
                    />
                    <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-gray-600" />
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
                    Log in <ArrowRightIcon className="w-7 pl-2" />
                </Button>
                </form>
            </div>
        </div>
    )
}