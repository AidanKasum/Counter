// import React, { useState } from "react";
// import Todo from "./Todo";
// import TodoForm from "./TodoForm";

// function TodoList() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (todo) => {
//     if (!todo.text || /^\s*$/.test(todo.text)) {
//       return;
//       // console.log(todos);
//       // console.log(todo, todo.text);
//     }
//     const newTodos = [todo, ...todos];
//     console.log(newTodos);
//     setTodos(newTodos);
//     // console.log(...todos);
//   };

//   const completeTodo = (id) => {
//     let updatedTodos = todos.map((todo) => {
//       if ((todo.id = id)) {
//         todo.isComplete = !todo.isComplete;
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };
//   return (
//     <div>
//       <h1>Что будел делать сегодня?</h1>
//       <TodoForm onSubmit={addTodo} />
//       <Todo todos={todos} completeTodo={completeTodo} />
//     </div>
//   );
// }

// export default TodoList;
