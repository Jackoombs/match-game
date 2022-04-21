import React, { useEffect, useState } from "react";
import PokemonCards from "./PokemonCards";
import ScoreBoard from "./ScoreBoard";
import WrongClick from "./WrongClick"

function Main() {

  const [score, setScore] = useState(0)
  const [showWrongClick, setShowClick] = useState(false)

  const triggerWrongClick = () => {
    setShowClick(true)
  }

  const resetModal = () => {
    setShowClick(false)
  }

  return (
    <main>
      <PokemonCards {...{score, setScore, triggerWrongClick}}/> 
      <ScoreBoard {...{score}}/>
      {showWrongClick?<WrongClick {...{resetModal}}/>:""}
    </main>
  )
}

export default Main