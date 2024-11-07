import { Metadata } from "next";
import PrivacyPolicy from "tspace/app/ui/info/privacy-policy";
import "../../globals.css"
import InitHeader from "tspace/app/ui/global/header";

export const metadata: Metadata = {
    title: "Privacy policy"
}

export default function PrivacyPolicyPage()
{
    return (
        <div>
            <InitHeader selectedPage={4} />
            <PrivacyPolicy />
        </div>
    )
}