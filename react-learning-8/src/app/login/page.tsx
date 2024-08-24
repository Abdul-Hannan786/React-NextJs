"use client";

import { ThemeContext } from "@/Context/ToggleTheme";
import Link from "next/link";

const Login = () => {

    const {isDarkTheme, toggleTheme} = ThemeContext()

  return (
    <>
      <h1
        style={{
          backgroundColor: isDarkTheme ? "black" : "white",
          color: isDarkTheme ? "white" : "black",
        }}
      >
        Hello Login
      </h1>
      <br />
      <Link href={"/"}>Home Page</Link>
      <button onClick={toggleTheme}>Change Theme</button>
    </>
  );
};

export default Login;
