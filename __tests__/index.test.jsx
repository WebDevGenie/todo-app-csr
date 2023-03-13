import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

// Create mock todos
const mockTodos = [
  { id: "1", task: "Buy groceries" },
  { id: "2", task: "Do laundry" },
];

describe("TodoList component", () => {
  // Test if mockTodos renders using the TodoList.tsx component
  it("should render a list of todos", () => {
    const { getByText } = render(
      <TodoList todos={mockTodos} setTodos={() => {}} />
    );
    mockTodos.forEach((todo) => {
      expect(getByText(todo.task)).toBeInTheDocument();
    });
  });

  // Test done button
  it("should delete todo when clicking done", () => {
    const { getByText } = render();
  });
});
