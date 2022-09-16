import { useState } from "react";
import "./index.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  const plus = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const minus = () => {
    setCounter(counter - 1);
    console.log(counter);
  };
  return (
    <div className="App-counter">
      <div>
        <h2>Счетчик:</h2>
        <h1>{counter}</h1>
        <button onClick={minus} className="minus">
          - Минус
        </button>
        <button onClick={plus} className="plus">
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default Counter;
