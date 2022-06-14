import React from "react";
import "./TodoList.css";

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const ToDoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  // TodoListProps is now a placeholder for the type we wish to pass into ToDoList
  return (
    <>
      <h1>Simple yet interesting ToDoList</h1>
      <ul>
        {props.items.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
// en todoDeleteHandler debo recibir el id, en bind no me interesa el this, solo el 2do parametro que representa el argumento de la funcion

export default ToDoList;
