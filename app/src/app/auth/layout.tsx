import "../globals.css"

export const metadata = {
  title: {
    template: '%s | Auth',
    default: "Sign in | Auth"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
