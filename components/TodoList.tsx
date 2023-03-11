import React from "react";
import { ITodo } from "@/pages";

const TodoList: React.FC<ITodo> = (props) => {
  const { todos, setTodos } = props;

  function handleRemove(key: number) {
    console.log(key);
    const updatedTodoList = todos.filter((todo) => todo.key !== key);
    setTodos(updatedTodoList);
  }
  return (
    <>
      {todos.map((todo) => {
        return (
          <li key={todo.key} className="todo-item">
            {todo.task}
            <button type="button" onClick={() => handleRemove(todo.key)}>
              X
            </button>
          </li>
        );
      })}
    </>
  );
};

export default TodoList;
