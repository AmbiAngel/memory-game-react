import { useState, useEffect  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataFetcher from './components/DataFetcher'

function App(){

  //`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchTerm}&weirdness=${weirdnessScale}`


  // let imgArray =  fetch(url)
  
  return(
    <>
    
    <h1>hi</h1>
    <DataFetcher></DataFetcher>
    </>
    // {imgArray.data.forEach((item, index)=>(
    //   <img src={item.images.original,url}></img>
    // ))
    // }
    // 

    // fetch  random imgs from [gify] API into array


    // use useEffect to Render Imgs in random order, with score as a dependency
    // logic
    //   when click img,
    //     if img was already clicked, game over
    //       render game over and restart button that sets score to 0.
    //     push it to selectedImgsID array
    //     Increase the score (state var) by 1
    //     *previous "Render Img in random order" function will at score +1 or at game reset because useEffect (sexy)
    // 
  )
}
export default App
