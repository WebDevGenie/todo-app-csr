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
  function handleRemove(id: string) {
    const updatedTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodoList);
  }
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <li key={todo.id} className="todo-item">
            {todo.task}
            <button type="button" onClick={() => handleRemove(todo.id)}>
              Done
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
