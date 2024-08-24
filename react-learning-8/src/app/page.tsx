"use client";

import { ThemeContext } from "@/Context/ToggleTheme";
import Link from "next/link";

export default function Home() {
  const { isDarkTheme, toggleTheme } = ThemeContext();

  return (
    <div
      style={{
        backgroundColor: isDarkTheme ? "black" : "white",
        color: isDarkTheme ? "white" : "black",
      }}
    >
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <Link href={"./login"}>Login</Link>
      <br />
      <br />
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}
