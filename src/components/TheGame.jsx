import { useState, useEffect } from "react";

export default function TheGame({ theme, limit, highScore, setHighScore }) {
  const [data, setData] = useState({});
  const [shuffledArr, setShuffledArr] = useState([]);
  const [score, setScore] = useState(0);
  const [clickedSources, setClickedSources] = useState([]);


  if (score > highScore) {
    setHighScore(score);
  }

  // Fetch data in useEffect so it renders once, on mount
  useEffect(() => {
    //   API info
    let searchTerm = theme;
    let apiKey = "kSAC6exmgG7ErgOZgDrLuwtdH0vUW3Bj";
    let numOfImgs = limit;
    const url = `https://api.giphy.com/v1/stickers/search?api_key=${apiKey}&q=${searchTerm}&limit=${numOfImgs}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    async function fetchData() {
      try {
        const data = await fetch(url, { mode: "cors" });
        const parsedData = await data.json();

        console.log(parsedData);
        setData(parsedData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  //   Shuffle Imgs array on mount and on score change
  useEffect(() => {
    function shuffleImgArr() {
      const shuffledArray = [...data.data];

      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }

      setShuffledArr(shuffledArray);
    }

    try {
      shuffleImgArr();
    } catch {
      setShuffledArr([]);
    }
  }, [data, score]);

  function handleClick(e) {
    if (clickedSources.includes(e.target.src)) {
      console.log("game over");
      setScore(0);
      setClickedSources([]);
    } else {
      setScore(() => score + 1);
      setClickedSources([...clickedSources, e.target.src]);
    }
  }

  return (
    <div className="game-container">
      <p className="score">Score: {score} / {limit}</p>
      <div className="img-grid">
        {shuffledArr.map((item, index) => (
          <>
            <div className="card">
              <img
                src={item.images.fixed_width.url}
                onClick={handleClick}
              ></img>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
