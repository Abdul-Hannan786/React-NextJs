"use client";

import React from "react";
import AuthForm from "../Components/AuthForm";
import Link from "next/link";

const signup = (email: string, password: string) => {
  console.log(`This is a Signup Function`, email, password);
};

const Signup = () => {
  return (
    <>
     <AuthForm btnLabel={"Signup"} btnFunc={signup} />
     <p>Already have an account.<Link href="./login">login here</Link></p>
    </>
  )
};

export default Signup;
