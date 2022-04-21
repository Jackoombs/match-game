import React, { useState, useEffect } from "react";


function Card({pokemon, index, score, setScore, checkHighScore, order, setOrder, hasClicked, setHasClicked, randomOrderArray, createPokemonArray, triggerWrongClick}) {
 
  if (hasClicked === Array(12).fill(true)) console.log('hey there')

  const clickHandler = () => {
    if (!hasClicked[index]) {
      setScore(score + 1)
      updateHasClicked(index)
      setOrder(randomOrderArray())
    } else {
        setHasClicked(Array(12).fill(false))
        checkHighScore()
        setScore(0)
        createPokemonArray()
        triggerWrongClick()
      } 
  }

  const updateHasClicked = (index) => {
    const newState = [...hasClicked]
    newState[index] = true
    setHasClicked(newState)
  }

  return (
    <div className="card" style={{order: order[index]}} onClick={clickHandler}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />  
   </div>
  )
}

export default Card