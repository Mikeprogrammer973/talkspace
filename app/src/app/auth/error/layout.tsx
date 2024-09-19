import "../../globals.css"

export const metadata = {
  title: "Error | Auth"
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
