import React, { useEffect, useState } from "react";
import Card from "./Card";

function PokemonCards({score, setScore, triggerWrongClick}) {

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
    console.log(hasClicked)
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

  // const triggerWrongClick = () => {}
  

  return (
    <div className="pokemon-cards">
        {pokemonArray.map((pokemon, index) => (
          <Card key={index} {...{pokemon, index, score, setScore, order, setOrder, hasClicked, setHasClicked, randomOrderArray, createPokemonArray, triggerWrongClick}}/>
        ))}
    </div>
  )
}

export default PokemonCards