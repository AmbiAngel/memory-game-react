import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  return(
    <h1>hi</h1>
    /*

    fetch  random imgs from [gify] API into array
    use useEffect to Render Imgs in random order, with score as a dependency
    logic
      when click img,
        if img was already clicked, game over
          render game over and restart button that sets score to 0.
        push it to selectedImgsID array
        Increase the score (state var) by 1
        *previous "Render Img in random order" function will at score +1 or at game reset because useEffect (sexy)
    */
  )
}
export default App
