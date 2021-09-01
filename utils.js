// c/p'd draft

import pokemon from './data.js';


function getRandomIndex() {
    return Math.floor(Math.random() * pokemon.length);
}

export function getRandomPokemon() {
    let randomIndex1 = getRandomIndex();
    let randomIndex2 = getRandomIndex();
    let randomIndex3 = getRandomIndex();

    while (
        randomIndex1 === randomIndex2 
        || randomIndex2 === randomIndex3 
        || randomIndex1 === randomIndex3) {
        randomIndex1 = getRandomIndex();
        randomIndex2 = getRandomIndex();
        randomIndex3 = getRandomIndex();
    }

    return [
        pokemon[randomIndex1], 
        pokemon[randomIndex2], 
        pokemon[randomIndex3]
    ];
}

// letPokeCaught = 0
// pokeCaught ++ <= on click/catch
// if pokeCaught > 10, redirect to results


// let pokeCaught = 0

// export function renderNewPokemon(){
//     const pokeEl1 = document.getElementById('poke1');
//     const pokeEl2 = document.getElementById('poke2');
//     const pokeEl3 = document.getElementById('poke3');

//     const pokeImg1 = document.getElementById('poke-img-1');
//     const pokeImg2 = document.getElementById('poke-img-2');
//     const pokeImg3 = document.getElementById('poke-img-3');

//     const getNewThree = getRandomPokemon();

// // getRandomPokemon();
// // encounterPokemon ();
// encounterPokemon(getNewThree[0].id);
// pokeEl1.value = getNewThree[0].id;
// pokeEl2.value = getNewThree[1].id;
// pokeEl3.value = getNewThree[2].id;

// pokeEl1.checked = false;
// pokeEl2.checked = false;
// pokeEl3.checked = false;

// }


// export function encounterPokemon(id){
//   getPokedex()
//   ++ times encountered
//   if !encountered, newObject(id: 5, encountered:1 caught:0)
//   setPokedex()
// }

// export function setPokedex(pokedex){
// //   make stringy, store in local
// const pokeString = JSON.stringify(pokedex);
// localStorage.setItem(pokedex, pokeString);
// }

// export function getPokedex(){
// //   de-string, get from local
// const pokeString = localStorage.getItem(pokedex);
// if (!pokeString){
//     return [];
// }
// }

// catchPokemon(id){
//   getPokedex()
//   caught ++ (in local)
//   setPokedex()
// }

// howManyCaughtSoFar()

// renderNewPokemon()
// - We need to find three unique pokemon to show the user
//     - getRandomPokemon()
//     - Whenever we find 3 new pokemon, we need to track that they have now been "seen"
//     - call encounterPokemon() on all 3 new pokemon

// getRandomPokemon()
// - does the hard work of finding three unique and random pokemon from our raw data
// - returns an array of three random pokemon

// setPokedex(pokedex)
// - takes in a pokedex, stringifies it and puts it into local storage

// getPokedex()
// - retrieves and parses the pokedex in local storage

// encounterPokemon(id)
// - getPokedex
// - If the pokemon has been previously seen, just increment the times seen
// - If this is the first time, make a new object with `{ id: 5, encoutered: 1, caught: 0 }`
// - setPokedex

// catchPokemon(id)
// - getPokedex
// - no need to check if it's been encountered. If you got this far, it _has_ been encountered.
// - Increment the `caught` of this pokemon in local storage
// - setPokedex


// renderNewPokemon()
// - We need to find three unique pokemon to show the user
//     - getRandomPokemon()
//     - Whenever we find 3 new pokemon, we need to track that they have now been "seen"
//     - call encounterPokemon() on all 3 new pokemon

// getRandomPokemon()
// - does the hard work of finding three unique and random pokemon from our raw data
// - returns an array of three random pokemon

// setPokedex(pokedex)
// - takes in a pokedex, stringifies it and puts it into local storage

// getPokedex()
// - retrieves and parses the pokedex in local storage

// encounterPokemon(id)
// - getPokedex
// - If the pokemon has been previously seen, just increment the times seen
// - If this is the first time, make a new object with `{ id: 5, encoutered: 1, caught: 0 }`
// - setPokedex

// catchPokemon(id)
// - getPokedex
// - no need to check if it's been encountered. If you got this far, it _has_ been encountered.
// - Increment the `caught` of this pokemon in local storage
// - setPokedex