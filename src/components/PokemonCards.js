import React, { useEffect, useState } from "react";

function PokemonCards({pokemonArray}) {

const [order, setOrder] = useState()

const randomOrderArray = () => {
  const array = [];
  while(array.length < 12){
    const r = Math.floor(Math.random() * 12) + 1;
    if(array.indexOf(r) === -1) array.push(r);
  }
  return(array);
}

const orderClickHandler = () => {
  setOrder(randomOrderArray())
}

useEffect(() => {
  setOrder(randomOrderArray())
},[])

  return (
    <div className="pokemon-cards">
        {pokemonArray.map((pokemon, index) => (
          <div key={index} className="card" style={{order: order[index]}} onClick={orderClickHandler}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
        ))}
    </div>
  )
}

export default PokemonCards