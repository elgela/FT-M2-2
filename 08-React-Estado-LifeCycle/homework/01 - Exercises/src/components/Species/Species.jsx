import React from "react";
// import styledSpecies from "./Species.module.css";

export default function Species({ species, handleSpecies, handleAllSpecies }) {
  console.log(species);
  return (
    <div>
      <h2>Species</h2>
      {species.map((elemento) => {
        return (
        <button key={elemento} onClick={handleSpecies} value={elemento}>{elemento}</button>
        )
      })}
      <button onClick={()=>handleAllSpecies()}>All Animals</button>
      {/* {console.log(species)} */}
    </div>
  )
}
