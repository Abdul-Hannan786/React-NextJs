"use client";
import { log } from "console";
import React, { useState } from "react";

type CounterType = {
  message: string;
  count: number;
};

const Counter = ({ message, count }: CounterType) => {
  const [initCount, setInitCount] = useState(count);
  const [username, setUsername] = useState("");

  const addHandler = () => {
    setInitCount(initCount + 1);
  };
  const minusHandler = () => {
    if (initCount === 0) {
      return;
    }
    setInitCount(initCount - 1);
  };

  const userHandler = (event: any) => {
   console.log();
   setUsername(event.target.value)   
  };
  return (
    <>
      <input type="text" value={username} onChange={userHandler} />
      <h1>{message}</h1>
      <h1>{initCount}</h1>
      <button onClick={addHandler}>Add</button>
      <button onClick={minusHandler}>Minus</button>
      <h1>{username}</h1>
    </>
  );
};

export default Counter;
