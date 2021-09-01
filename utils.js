// c/p'd draft

import pokemon from './data.js';
import { encounterPokemon } from './local-storage-utils.js';


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


export function renderNewPokemon(){
   const randomTrio = getRandomPokemon();
    encounterPokemon(id);

}

// letPokeCaught = 0
// pokeCaught ++ <= on click/catch
// if pokeCaught > 10, redirect to results



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


// howManyCaughtSoFar()