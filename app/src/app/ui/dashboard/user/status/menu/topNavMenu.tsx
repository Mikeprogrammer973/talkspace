
export function TopNavMenu()
{
    return (
        <div onClick={(e)=>e.stopPropagation()} className="p-5 rounded-lg text-gray-200">
            <p role="button" className="text-sm text-center font-semibold text-red-500 px-2 py-4">Report inappropriate</p>
            <p role="button" className="text-sm px-2 py-4 text-center">About this account</p>
        </div>
    )
}