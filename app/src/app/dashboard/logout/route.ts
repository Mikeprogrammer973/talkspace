import { signOut } from "tspace/app/lib/user/auth/auth";


export async function GET() {
    await signOut()
}