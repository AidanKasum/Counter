// import React, { useState } from "react";

// function TodoForm(props) {
//   const [input, setInput] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     props.onSubmit({
//       id: Math.floor(Math.random() * 10000),
//       text: input,
//     });

//     setInput("");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="todo-form">
//       <input
//         type="text"
//         placeholder="Добавить задание"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         name="text"
//         className="todo-input"
//       />
//       <button className="todo-btn">Добавить</button>
//     </form>
//   );
// }

// export default TodoForm;
