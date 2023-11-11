import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DataFetcher from "./components/DataFetcher";
import TheGame from "./components/TheGame";

function App() {

  const [gameCount, setGameCount] = useState(0);
  const [gameState, setGameState] = useState(false)
  const [themeInput, setThemeInput] = useState('')


  function toggleGameState(){
    gameState ? setGameState(false) : setGameState(true)
  }

  return (
    <>
      <h1>hi</h1>
      <label htmlFor="theme-input">Theme:</label>
      <input id="theme-input" value={themeInput} onChange={(e)=>{setThemeInput(e.target.value)}}></input>
      <button onClick={toggleGameState}>{gameState ? "End Game" : "Start Game"}</button>
      {(gameState) && <TheGame theme={themeInput}></TheGame>}
    </>
  );
}
export default App;
