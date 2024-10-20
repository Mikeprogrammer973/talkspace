import "../../../../globals.css"

export const metadata = {
  title: "Reset Password"
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
