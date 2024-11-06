import { Metadata } from "next";
import PrivacyPolicy from "tspace/app/ui/info/privacy-policy";
import "../../globals.css"

export const metadata: Metadata = {
    title: "Privacy policy"
}

export default function PrivacyPolicyPage()
{
    return (
        <div>
            <PrivacyPolicy />
        </div>
    )
}