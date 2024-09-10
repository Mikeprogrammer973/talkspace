import { Metadata } from "next";


export const metadata: Metadata = {
  title:{
    template: "%s | TalkSpace",
    default: "TalkSpace"
  },
  description: "Connect with friends and make new connections. Chat, share, and explore a social network full of possibilities."
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