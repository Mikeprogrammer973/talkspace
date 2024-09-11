import { createTransport } from 'nodemailer'

export interface EmailParams  {
    readonly from: "TalkSpace technopro.net@gmail.com",
    to: string,
    subject: string,
    html: string
}

export const transporter = createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
})