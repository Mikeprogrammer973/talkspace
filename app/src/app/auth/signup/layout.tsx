import "../../globals.css"

export const metadata = {
  title: "Sign up | Auth"
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
