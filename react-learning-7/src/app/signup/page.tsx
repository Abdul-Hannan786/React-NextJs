"use client";

import AuthForm from "@/Components/AuthForm";
import Link from "next/link";

const Signup = () => {
  const signup = (email: string, password: string) => {
    console.log("Signup Function", email, password);
  };

  return (
    <>
      <AuthForm btnLabel={"Signup"} btnFunc={signup} />;
      <p>
        Already have an account <Link href={"./login"}>Login Here</Link>
      </p>
    </>
  );
};

export default Signup;
