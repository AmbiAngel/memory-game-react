import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DataFetcher from "./components/DataFetcher";
import TheGame from "./components/TheGame";

function App() {

  const [gameCount, setGameCount] = useState(0);
  const [gameState, setGameState] = useState(false)








  function toggleGameState(){
    gameState ? setGameState(false) : setGameState(true)
  }

  return (
    <>
      <h1>hi</h1>
      <label htmlFor="theme-input">Theme:</label>
      <input id="theme-input"></input>
      <button onClick={toggleGameState}>{gameState ? "End Game" : "Start Game"}</button>
      {(gameState) && <TheGame></TheGame>}
    </>

    // fetch  random imgs from [gify] API into array

    // use useEffect to Render Imgs in random order, with score as a dependency
    // logic
    //   when click img,
    //     if img was already clicked, game over
    //       render game over and restart button that sets score to 0.
    //     push it to selectedImgsID array
    //     Increase the score (state var) by 1
    //     *previous "Render Img in random order" function will at score +1 or at game reset because useEffect (sexy)
    //      *Score needs be in same component as useEffect random Render and game logic
    //

    /* 
    useEffect sets state var, shuffledArray, on compononet [mount, score change, new game]
    compononet is game area
    */
  );
}
export default App;
