import "./Box.css";
import { useState } from "react";

export default function Box({ boxValue, currentPlayer, setCurrentPlayer }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [value, setValue] = useState(boxValue);

  const onClickHandler = () => {
    setValue(currentPlayer);
    console.log(boxValue + "box valuee");
    setIsDisabled(true);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    
  };
  return (
    <div className="boxContainer">
      <button
        disabled={isDisabled}
        onClick={() => onClickHandler()}
        onMouseEnter={() => setValue(currentPlayer)}
        onMouseLeave={() => setValue(null)}
      >
        {value}
      </button>
    </div>
  );
}
