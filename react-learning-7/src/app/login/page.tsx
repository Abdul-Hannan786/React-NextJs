"use client";

import AuthForm from "@/Components/AuthForm";
import Link from "next/link";

const Login = () => {
  const login = (email: string, password: string) => {
    console.log("Login Function", email, password);
  };

  return (
    <>
      <AuthForm btnLabel={"Login"} btnFunc={login} />
      <p>
        Dont have an account <Link href={"./signup"}>Signup Here</Link>
      </p>
    </>
  );
};

export default Login;
