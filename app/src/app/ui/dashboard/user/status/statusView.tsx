import Image from "next/image"
import { Button } from "../../../global/button"

export function StatusView()
{
    return (
        <div className={"w-full h-full flex justify-center md:justify-between items-center p-5 -mt-6"}>
            <Button className="hidden md:flex">&lt;</Button>
            <div className="p-5">
                <div className="bg-red-600">
                    TIME CONTROLLER
                </div>
                <div>
                    <img className="bg-gray-600 w-[80vh] h-[80vh] aspect-square" alt="demo-status-image" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKhSSwriyDJ4jG9pHgrfUFjfM3jbemkw0Jw&s"} width={100} height={100} />
                </div>
            </div>
            <Button className="hidden md:flex">&gt;</Button>
        </div>
    )
}