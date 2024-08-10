"use client";
import React, { useState } from "react";

type AuthFormType = {
  btnLabel: string;
  btnFunc: (email: string, password: string) => void;
};

const AuthForm = ({ btnLabel, btnFunc }: AuthFormType) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          btnFunc(email, password);
        }}
      >
        {btnLabel}
      </button>
    </>
  );
};

export default AuthForm;
