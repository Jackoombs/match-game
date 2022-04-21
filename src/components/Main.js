import React, { useEffect, useState } from "react";
import PokemonCards from "./PokemonCards";
import ScoreBoard from "./ScoreBoard";
import WrongClick from "./WrongClick"
import Instructions from "./Instructions";

function Main() {

  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [showWrongClick, setShowClick] = useState(false)

  const checkHighScore = () => {
    if (score > highScore) setHighScore(score)
  }

  const triggerWrongClick = () => {
    setShowClick(true)
  }

  const resetModal = () => {
    setShowClick(false)
  }

  return (
    <main>
      <Instructions />
      <PokemonCards {...{score, setScore, checkHighScore, triggerWrongClick}}/> 
      <ScoreBoard {...{score, highScore}}/>
      {showWrongClick?<WrongClick {...{resetModal}}/>:""}
    </main>
  )
}

export default Main