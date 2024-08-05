import { StatusWrapper } from "tspace/app/ui/dashboard/user/statusWrapper"

export default function Page()
{
    return (
        <div className="w-full max-w-[100vw]">
            <StatusWrapper />
            <div>
                <img className="w-[600px]" src="http://localhost:3000/_next/image?url=%2Flogo%2Ftalkspace-banner.png&w=256&q=75" alt="img_teste" />
                <img className="w-[600px]" src="http://localhost:3000/_next/image?url=%2Flogo%2Ftalkspace-banner.png&w=256&q=75" alt="img_teste" />
                <img className="w-[600px]" src="http://localhost:3000/_next/image?url=%2Flogo%2Ftalkspace-banner.png&w=256&q=75" alt="img_teste" />
            </div>
        </div>
    )
}