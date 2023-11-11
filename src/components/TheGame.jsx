import { useState, useEffect } from "react";

export default function TheGame({ theme, limit }) {
  const [data, setData] = useState({});
  const [shuffledArr, setShuffledArr] = useState([]);

  // Fetch data in useEffect so it renders once, on mount
  useEffect(() => {
    //   API info
    let searchTerm = "cat";
    let apiKey = "kSAC6exmgG7ErgOZgDrLuwtdH0vUW3Bj";
    let limit = "12";
    const url = `https://api.giphy.com/v1/stickers/search?api_key=${apiKey}&q=${searchTerm}&limit=${limit}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
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

//   Shuffle Imgs array on mount... TODO: and on score change
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
  }, [data]);

  return (
    <div className="img-grid">
      {shuffledArr.map((item, index) => (
        <>
          <img src={item.images.fixed_width.url}></img>
        </>
      ))}
    </div>
  );
}
