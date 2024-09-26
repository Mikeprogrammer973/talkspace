
export default function Page({params}: {params: {username: string} })
{
    return (
        <div>
        Welcome, {params.username}!
        </div>
    )
}