import React from "react";
import { ITodo } from "@/pages";

// Define 'todos' prop as an array of 'ITodo'
interface ITodoListProps {
  todos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
  // Destructure props
  const { todos, setTodos } = props;

  // Handle remove button
  function handleRemove(key: number) {
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
