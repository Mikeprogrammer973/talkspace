import { Metadata } from "next";
import "../../globals.css"
import InitHeader from "tspace/app/ui/global/header";
import FAQ from "tspace/app/ui/info/faq";

export const metadata: Metadata = {
    title: "FAQ"
}

export default function FAQpage()
{
    return (
        <div>
            <InitHeader selectedPage={3} />
            <FAQ />
        </div>
    )
}