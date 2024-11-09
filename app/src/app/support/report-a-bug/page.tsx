
import { Metadata } from "next";
import "../../globals.css"
import InitHeader from "tspace/app/ui/global/header";
import ReportBug from "tspace/app/ui/support/report-a-bug";

export const metadata: Metadata = {
    title: "Report a bug"
}

export default function ReportBugPage()
{
    return (
        <div>
            <InitHeader selectedPage={7} />
            <ReportBug />
        </div>
    )
}