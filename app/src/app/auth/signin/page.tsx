"use client"

import { Suspense, useState } from "react";
import LoginForm from "../../ui/auth/login-form";
import Spinner from "tspace/app/ui/global/spinner";

function LoginComponent()
{
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default function LoginPage() {
  return <Suspense fallback={<Spinner visible={true} label="Loading..." />}>
    <LoginComponent />
  </Suspense>
}