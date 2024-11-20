
import { Metadata } from "next";
import "../../globals.css"
import InitHeader from "tspace/app/ui/global/header";
import SupportTeam from "tspace/app/ui/support/support-team";
import Chat from "./chat";

export const metadata: Metadata = {
    title: "Support team"
}

export default function SupportTeamPage()
{
    return (
        <div>
            <InitHeader selectedPage={5} />
            {/* <Chat /> */}
            <SupportTeam />
        </div>
    )
}