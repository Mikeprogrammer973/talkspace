import { MagnifyingGlassIcon, BellAlertIcon, PlusCircleIcon, ArrowsPointingOutIcon } from "@heroicons/react/20/solid";
import MenuItem from "./menu_item";

export default function BottomNav()
{
    return (
        <div className="sticky bottom-0 left-0 right-0 flex md:hidden justify-between bg-gray-700">
            <div>
                <MenuItem label="Search" icon={<MagnifyingGlassIcon fill="currentColor" className="w-6 h-6" />}/>
            </div>
            <div>
                <MenuItem label="Explore" icon={<ArrowsPointingOutIcon fill="currentColor" className="w-6 h-6" />} />
            </div>
            <div>
                <MenuItem label="Create" icon={<PlusCircleIcon fill="currentColor" className="w-6 h-6" />} />
            </div>
        </div>
    )
}