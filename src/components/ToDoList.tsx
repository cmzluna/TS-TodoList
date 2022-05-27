import React from "react";

const ToDoList: React.FC = () => {
  const todos = [
    { id: "t1", text: "text 1" },
    { id: "t2", text: "text 2" },
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default ToDoList;
