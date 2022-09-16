import React from "react";
import "./Quiz.css";

function Game({ question, onClickVariants, step }) {
  const percentage = Math.round((step / question.variants.length) * 100);

  console.log(percentage);
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariants(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}
export default Game;
