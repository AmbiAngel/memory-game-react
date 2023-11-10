import React, { useState, useEffect } from "react";

function DataFetcher() {
  let searchTerm = "cat";
  let apiKey = "kSAC6exmgG7ErgOZgDrLuwtdH0vUW3Bj";
  let limit = "12";
  const url = `https://api.giphy.com/v1/stickers/search?api_key=${apiKey}&q=${searchTerm}&limit=${limit}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
        try {
        const data = await fetch(url,{mode: 'cors'});
        const parsedData = await data.json()
            
        setData(parsedData);
        setLoading(false);
        console.log(parsedData);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data){
      return (
        <div>
            {data.data.map((item, index)=>(
                <>
                <img src={item.images.original.url}></img>
                </>
            ))}
        </div>
      );
  }
  else{
    <div>uh</div>
  }
}

export default DataFetcher;
