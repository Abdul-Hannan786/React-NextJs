"use client";

type ButtonTypes = {
  label: string;
  clickHandler: () => void;
};

export default function MyButton({ label, clickHandler }: ButtonTypes) {
  // const eventHandler = () => {
  //     console.log("This is event Handler");
  // }

  return (
    <>
      {/* <button onClick={eventHandler}>{label}</button> */}
      <button onClick={clickHandler}>{label}</button>
    </>
  );
}
