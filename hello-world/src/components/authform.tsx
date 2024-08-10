"use client";

type AuthFormTypes = {
  btnLabel: string;
};

export default function AuthForm({ btnLabel }: AuthFormTypes) {
  return (
    <>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" />
      <br />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" />
      <br />

      <button>{btnLabel}</button>
    </>
  );
}
