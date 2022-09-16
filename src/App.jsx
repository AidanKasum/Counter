import React, { useState } from "react";
import Counter from "./components/CurrencyConverter/Counter";
import Modal from "./components/Modal/Modal";
import Quiz from "./components/Quiz/Quiz";

function App() {
  return (
    <div>
      <Quiz />
      <Counter />
    </div>
  );
}

export default App;
