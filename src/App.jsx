import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DataFetcher from "./components/DataFetcher";
import TheGame from "./components/TheGame";

function App() {

  const [gameCount, setGameCount] = useState(0);
  const [gameState, setGameState] = useState(false)
  const [themeInput, setThemeInput] = useState('cat')
  const [numOfImgs, setNumOfImgs] = useState(12)
  const [highScore, setHighScore] = useState(0);


  function toggleGameState(e){
    event.preventDefault();
    gameState ? setGameState(false) : setGameState(true)
  }

  return (
    <>
      <h1>Memory Game</h1>
      <form action="" className="inputs-container">
        <label htmlFor="theme-input">Theme:</label>
        <input id="theme-input" value={themeInput} onChange={(e)=>{setThemeInput(e.target.value)}} disabled={gameState}></input>
        <label htmlFor="numOfImgs-input">Number of Images:</label>
        <input id="numOfImgs-input" value={numOfImgs} onChange={(e)=>{setNumOfImgs(e.target.value)}} disabled={gameState}></input>
        <button className={gameState ? "end-game-btn" : "start-game-btn"} onClick={toggleGameState}>{gameState ? "End Game" : "Start Game"}</button>
      </form>
      <p className="high-score">High Score: {highScore}</p>
      {(gameState) && <TheGame theme={themeInput} limit={numOfImgs} setHighScore={setHighScore} highScore={highScore}></TheGame>}
    </>
  );
}
export default App;
