import React from "react";

interface TodoListProps {
  items: { id: string; text: string }[];
}

const ToDoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  // TodoListProps is now a placeholder for the type we wish to pass into ToDoList
  return (
    <>
      <h1>hi</h1>
      <ul>
        {props.items.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
