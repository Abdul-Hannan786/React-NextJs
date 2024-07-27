"use client";

import HelloWorld from "./heloworld";

export default function Home() {
  const signUp = () => {
    console.log("This is a sign up function");
  };

  const login = () => {
    console.log("This is a login function");
  };
  const forgetPassword = () => {
    console.log("This is a forget password function");
  };

  return (
    <>
      <HelloWorld
        greet="Assalamu Alikum"
        message="the quick brown fox jumps over the lazy dog."
        btnLabel="Sign Up"
        eventHandler={signUp}
      />
      <HelloWorld
        greet="Eid Mubarak"
        message="Eidi le kar aan warna ghar pe hi rehna aane ki zaroorat nhi SHUKRIYA!"
        btnLabel="Login"
        eventHandler={login}
      />
      <HelloWorld
        greet="Hello Sir"
        message="How may i help you?"
        btnLabel="Forget password"
        eventHandler={forgetPassword}
      />
    </>
  );
}
