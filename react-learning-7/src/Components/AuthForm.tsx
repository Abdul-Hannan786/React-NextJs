"use client";

import { useState } from "react";

type AuthFormType = {
    btnLabel: string
    btnFunc: (email: string, password: string) => void
}

const AuthForm = ({btnLabel, btnFunc}: AuthFormType) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  return (
    <>
      <input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input 
      type="password" 
      placeholder="Enter Your Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => btnFunc(email, password)}>{btnLabel}</button>
    </>
  );
};

export default AuthForm;
