"use client";

import MyButton from "./button";

type HelloTypes = {
  greet: string;
  message: string;
  btnLabel: string;
  eventHandler: () => void;
};

export default function HelloWorld({
  greet,
  message,
  btnLabel,
  eventHandler,
}: HelloTypes) {
  return (
    <>
      <h1>{greet}</h1>
      <p>{message}</p>
      <MyButton label={btnLabel} clickHandler={eventHandler} />
    </>
  );
}
