// import React, { useState } from "react";
// import TodoForm from "./TodoForm";
// import { AiOutlineCloseSquare } from "react-icons/Ai";
// import { TiEdit } from "react-icons/ti";

// function Todo({ todos, completeTodo }) {
//   const [edit, setEdit] = useState({
//     id: null,
//     value: "",
//   });
//   return todos.map((todo, index) => (
//     <div
//       className={todo.isComplete ? "todo-row complete" : "todo-row"}
//       key={index}
//     >
//       <div className="" key={todo.id} onClick={() => completeTodo(todo.id)}>
//         {todo.text}
//       </div>
//       {/* <div className="icons">
//         <AiOutlineCloseSquare onClick={() => removeTodo(todo.id)} />
//         <TiEdit onClick={() => setEdit(todo.id)} />
//       </div> */}
//     </div>
//   ));
// }

// export default Todo;
