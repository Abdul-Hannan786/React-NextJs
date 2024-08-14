"use client";

type TodoListType = {
  todos: string[];
  deleteTodo: (index: number) => void;
  setEditIndex: (index: number) => void;
};

const TodoList = ({ todos, deleteTodo, setEditIndex }: TodoListType) => {
  return (
    <>
      {todos.map((todo, index) => (
        <p key={todo + index}>
          {todo}
          <button
            onClick={() => {
              deleteTodo(index);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              setEditIndex(index);
            }}
          >
            Edit
          </button>
        </p>
      ))}
    </>
  );
};

export default TodoList;
