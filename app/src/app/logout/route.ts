import { signOut } from "next-auth/react";



export async function GET() {
   return await signOut()
}