"use client";

import AuthForm from "@/components/authform";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <AuthForm btnLabel={"Login"} />

      <p>
        Do not have an account? 
        <Link href="./signup">Sign up here.</Link>
      </p>
    </>
  );
}
