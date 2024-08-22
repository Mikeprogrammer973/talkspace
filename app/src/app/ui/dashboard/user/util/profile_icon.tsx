
interface ProfileIconPrms {
    image: string, 
    size: {width: number, height: number},
    border?: boolean
}

export function ProfileIcon({image, size, border}: ProfileIconPrms)
{
    return (
        <div role="button" style={{width: size.width + "rem", height: size.height + "rem"}} className={"rounded-full" + (border && " border-2")}>
            <img className="rounded-full w-full h-full" src={image} alt="profile_user" />
        </div>
    )
}