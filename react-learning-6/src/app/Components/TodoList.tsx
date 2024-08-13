"use client";

type TodoListType = {
  todos: string[];
  deleteTodo: (index: number) => void;
  setEditIndex: (index: number) => void
};

const TodoList = ({ todos, deleteTodo, setEditIndex }: TodoListType) => {
  return (
    <>
      {todos.map((todo, index) => (
        <div key={todo + index}>
          <p>
            {todo}
            <button
              onClick={() => {
                deleteTodo(index);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {setEditIndex(index)}}
            >
              Edit
            </button>
          </p>
        </div>
      ))}
    </>
  );
};

export default TodoList;
