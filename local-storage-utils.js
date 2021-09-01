import data from './data.js';
const POKEDEX = 'POKEDEX';

// set
export function setPokedex(pokedex){
    const stringDex = JSON.stringify(pokedex);
    localStorage.setItem(POKEDEX, stringDex);
}


// get
export function getPokedex(pokedex){
    let stringDex = localStorage.getItem(POKEDEX);
    if (!stringDex) {
        return [];
    }
    return JSON.parse(stringDex);
}

//Encounter
//a wild pokemon has appeared! 
export function encounterPokemon(id){
    const pokedex = getPokedex();
    const encountered = pokedex.find(pokemon => Number(pokemon.id) === Number(id));
     // to refactor: pokeFind function
    if (encountered){
        encountered.quantity++; 
    } else {
        const newEncounter = data.find(pokemon => Number(pokemon.id) === Number(id));
         pokedex.push({ 
             id,
             encountered: 1,
             captured: 0,
             name: data.pokemon
         });
    }
    setPokedex(pokedex);
}

//catch
export function gottaCatchEmAll(id){
    const pokedex = getPokedex();
    const pokeFind = pokedex.find(pokemon => Number(pokemon.id) === Number(id));
    // to refactor: pokeFind function
    pokeFind.caught++;
    setPokedex(pokedex);
}