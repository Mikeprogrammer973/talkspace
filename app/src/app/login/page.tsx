"use client"

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import LoginForm from "../ui/auth/login-form";
import { Alert } from "../ui/global/alert";
import MsgBox from "../ui/global/msgBox";

export default function LoginPage() {
  const [msgBV, setMsgBV] = useState<boolean>(true)
  const msg: string | null = new URLSearchParams(useSearchParams()).get("message")

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {msg === "reg" && <MsgBox setVisible={setMsgBV} visible={msgBV} msg={<Alert title="TalkSpace" color="success" msg={<div className="font-semibold text-lg"> Account created successfully, you can login now. </div>} />} />}
      </Suspense>
      <LoginForm />
    </div>
  );
}