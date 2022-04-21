import React, { useEffect, useState } from "react";
import PokemonCards from "./PokemonCards";

function Main() {

  const [pokemonArray, setPokemonArray] = useState([])

  useEffect(() => {
    console.log('hi')
    createPokemonArray()
  },[])

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
    <main>
      <PokemonCards {...{pokemonArray}}/> 
    </main>
  )
}

export default Main