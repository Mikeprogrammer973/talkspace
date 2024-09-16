"use server"

import { EmailParams, transporter } from "./config";


export default async function send(params: EmailParams)
{
    try {
        transporter.verify((error)=>{
            if(error) throw error
            else {
                transporter.sendMail({...params, from: process.env.SMTP_FROM}, (error)=>{
                    if(error) throw error
                })
            }
        })
        return true
    } catch(e) {
        return false 
    }
}