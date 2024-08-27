"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { ThemeContext } from "@/context/toggletheme";
import Link from "next/link";

export default function Home() {
  const { isDarkTheme, toggleTheme } = ThemeContext();

  return (
    <section
      className={styles.main}
      style={{
        backgroundColor: isDarkTheme ? "black" : "white",
        color: isDarkTheme ? "white" : "black",
      }}
    >
      <button onClick={toggleTheme}>Change Theme</button>
      <Link href={"/login"}>Login</Link>
      <Link href={"/login"}>Login</Link>
    </section>
  );
}
