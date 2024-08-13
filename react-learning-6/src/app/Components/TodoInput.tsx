"use client";

import { useState } from "react";

type TodoInputType = {
  addNewTodo: (newTodo: string) => void;
};

const TodoInput = ({ addNewTodo }: TodoInputType) => {
  const [newTodo, setNewTodo] = useState("");

  return (
    <>
      <label htmlFor="new-todo">Todo: </label>
      <input
        type="text"
        id="new-todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        onClick={() => {
          addNewTodo(newTodo);
          setNewTodo("")
        }}
      >
        Add Todo
      </button>
    </>
  );
};

export default TodoInput;
