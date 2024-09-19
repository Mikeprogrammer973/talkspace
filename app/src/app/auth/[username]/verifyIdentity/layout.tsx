
import "../../../globals.css"

export const metadata = {
  title: "Verify Identity | Auth"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>{children}</div>
  )
}
