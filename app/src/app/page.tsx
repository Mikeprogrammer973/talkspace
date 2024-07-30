
import { Metadata } from "next";
import LoginForm from "./ui/auth/login-form";

export const metadata: Metadata = {
  title:{
    template: "%s | TalkSpace",
    default: "TalkSpace"
  },
  description: "Connect with friends and make new connections. Chat, share, and explore a social network full of possibilities."
}

export default function Home() {
  return (
    <LoginForm />
  );
}
