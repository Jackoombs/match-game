import React, { useEffect, useState } from "react";
import Card from "./Card";

function PokemonCards({score, setScore, checkHighScore,triggerWrongClick}) {

  const [pokemonArray, setPokemonArray] = useState([])
  const [order, setOrder] = useState([])
  const [hasClicked, setHasClicked] = useState(Array(12).fill(false))
  

  useEffect(() => {
    setOrder(randomOrderArray())
  },[])

  useEffect(() => {
    createPokemonArray()
  },[])

  useEffect(() => {
    if (hasClicked.every((element) => element === true)) {
      createPokemonArray()
      setHasClicked(Array(12).fill(false))
    }
  },[hasClicked])

  const randomOrderArray = () => {
    const array = [];
    while(array.length < 12){
      const r = Math.floor(Math.random() * 12) + 1;
      if(array.indexOf(r) === -1) array.push(r);
    }
    return(array);
  }

  const createArray = () => {
    const array = [];
    while(array.length < 12){
      const r = Math.floor(Math.random() * 151) + 1;
      if(array.indexOf(r) === -1) array.push(r);
    }
    return(array);
  }

  const getPokemon = async (id) => {
    const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await reponse.json()
    return data
  }

  const createPokemonArray = async () => {
    const array = createArray()
    const pokemonArray = await Promise.all(array.map((id) => getPokemon(id)))
    setPokemonArray(pokemonArray)
  }

  return (
    <div className="pokemon-cards">
        {pokemonArray.map((pokemon, index) => (
          <Card key={index} {...{pokemon, index, score, setScore, checkHighScore, order, setOrder, hasClicked, setHasClicked, randomOrderArray, createPokemonArray, triggerWrongClick}}/>
        ))}
    </div>
  )
}

export default PokemonCards