import "../../globals.css"

export const metadata = {
  title: "Sign in | Auth"
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
