"use client";

import React from "react";
import AuthForm from "../Components/AuthForm";
import Link from "next/link";

const login = (email: string, password: string) => {
  console.log(`This is a Login Function`, email, password);
};

const Login = () => {
  return( 
    <>
      <AuthForm btnLabel={"Login"} btnFunc={login} />
      <p>Dont have an account<Link href="./signup">Signup here</Link></p>
    </>
  )
};

export default Login;
