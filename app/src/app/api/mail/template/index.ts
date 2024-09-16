import { ReactNode } from "react";
import { renderToString } from "react-dom/server";

export function getTemplate(template: ReactNode)
{
    return renderToString(template)
}