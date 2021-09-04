import data from './data.js';

// set
export function setPokedex(pokedex){
    const stringDex = JSON.stringify(pokedex);
    localStorage.setItem('POKEDEX', stringDex);
}

// get
export function getPokedex(){
    let stringDex = localStorage.getItem('POKEDEX');
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
        encountered.encountered++; 
    } else {
        const newEncounter = data.find(pokemon => Number(pokemon.id) === Number(id));
        pokedex.push({ 
            id,
            name: newEncounter.pokemon,
            encountered: 1,
            captured: 0,
        });
    }
    setPokedex(pokedex);
}

//catch
export function gottaCatchEmAll(id){
    const pokedex = getPokedex();
    const pokeFind = pokedex.find(pokemon => Number(pokemon.id) === Number(id));
    pokeFind.captured++;
    setPokedex(pokedex);
}