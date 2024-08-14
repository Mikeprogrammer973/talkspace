// import { PrismaClient } from "@prisma/client";
// import { NextResponse } from "next/server";

// const prisma = new PrismaClient()

// export async function GET()
// {
//     const nweUser = await prisma.user.create({
//         data: {
//             email: "thalita@hotmail.com",
//             name: "Thalita Furtado",
//             username: "thalita_f",
//             password: "186464616",
//             profile: {
//                 create: {
//                     bio: "New user"
//                 }
//             }
//         }
//     })

//     return NextResponse.json(nweUser)
// }