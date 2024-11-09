
import { Metadata } from "next";
import "../../globals.css"
import InitHeader from "tspace/app/ui/global/header";
import ContactUs from "tspace/app/ui/support/contact-us";

export const metadata: Metadata = {
    title: "Contact us"
}

export default function ContactUsPage()
{
    return (
        <div>
            <InitHeader selectedPage={6} />
            <ContactUs />
        </div>
    )
}