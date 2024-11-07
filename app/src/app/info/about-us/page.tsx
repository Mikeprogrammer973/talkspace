import { Metadata } from "next";
import "../../globals.css"
import InitHeader from "tspace/app/ui/global/header"
import AboutUs from "tspace/app/ui/info/about-us";

export const metadata: Metadata = {
    title: "About us"
}

export default function FAQpage()
{
    return (
        <div>
            <InitHeader selectedPage={2} />
            <AboutUs />
        </div>
    )
}