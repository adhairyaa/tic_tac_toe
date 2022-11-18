import { useState } from "react";
import "./App.css";
import Box from "./components/Box";

function App() {
  const boxValue = [null, null, null, null, null, null, null, null, null];
  const [currentPlayer, setCurrentPlayer] = useState("X");

  return (
    <div className="App">
      <h1>It's {currentPlayer}'s turn</h1>
      <div className="gameBoard">
        {boxValue.map((value) => (
          <Box
            boxValue={value}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
