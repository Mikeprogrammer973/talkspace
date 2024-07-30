
import Image from "next/image";

export default function LogoBanner()
{
    return (
        <div className="hidden lg:flex h-screen items-center justify-center">
            <Image
                alt="hero image"
                src={"/logo/talkspace-banner.png"}
                width={500}
                height={500}
            />
        </div>
    )
}