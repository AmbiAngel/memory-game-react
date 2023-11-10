import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DataFetcher from "./components/DataFetcher";

function App() {
  const [data, setData] = useState(null);
  const [gameCount, setGameCount] = useState(0);

  console.log("data");
  console.log(data);

  function shuffleImgArr() {
    const shuffledArray = [...data.data];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    console.log("shuffle:");
    console.log(shuffledArray);

    return shuffledArray;

    // return (
    //   <div>
    //     {shuffledArray.data.map((item, index) => (
    //       <>
    //         <img src={item.images.original.url}></img>
    //       </>
    //     ))}
    //   </div>
    // );
  }

  function renderImgsRandomly() {

    const shuffle = shuffleImgArr();

    return (
      <div>
        {shuffle.map((item, index) => (
          <>
            <img src={item.images.original.url}></img>
          </>
        ))}
      </div>
    );
  }


  useEffect(() => {
    //   API info
    let searchTerm = "guitar";
    let apiKey = "kSAC6exmgG7ErgOZgDrLuwtdH0vUW3Bj";
    let limit = "12";
    const url = `https://api.giphy.com/v1/stickers/search?api_key=${apiKey}&q=${searchTerm}&limit=${limit}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    async function fetchData() {
      try {
        const data = await fetch(url, { mode: "cors" });
        const parsedData = await data.json();

        setData(parsedData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <h1>hi</h1>
      {data && renderImgsRandomly()}
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
  );
}
export default App;
