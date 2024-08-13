"use client";

import { useEffect, useState } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import TodoEdit from "./Components/TodoEdit";

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);

  const [editIndex, setEditIndex] = useState(-1);

  const addNewTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index: number) => {
    let cloneTodos = [...todos];
    cloneTodos.splice(index, 1);
    setTodos([...cloneTodos]);
  };

  const saveEditedTodo = (updatedTodo: string) => {
    console.log(updatedTodo);
    let cloneTodos = [...todos]
    cloneTodos.splice(editIndex, 1, updatedTodo)
    setTodos([...cloneTodos])
    setEditIndex(-1)
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      {editIndex === -1 ? (
        <TodoInput addNewTodo={addNewTodo} />
      ) : (
        <TodoEdit saveEditedTodo={saveEditedTodo} editedTodo={todos[editIndex]}/>
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        setEditIndex={setEditIndex}
      />
    </>
  );
}
