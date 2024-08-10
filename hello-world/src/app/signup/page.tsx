"use client";

import AuthForm from "@/components/authform";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <AuthForm btnLabel={"Signup"} />

      <p>
        Already have an account?
        <Link href="./login">Login here.</Link>
      </p>
    </>
  );
}
