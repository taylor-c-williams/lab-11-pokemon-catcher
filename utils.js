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
//a wild data has appeared! 
export function encounterPokemon(id){
    const pokedex = getPokedex();
    const encountered = pokedex.find(data => Number(data.id) === Number(id));
     // to refactor: pokeFind function
    if (encountered){
        encountered.encountered++; 
    } else {
        const newEncounter = data.find(data => Number(data.id) === Number(id));
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
    const pokeFind = pokedex.find(data => Number(data.id) === Number(id));
    pokeFind.captured++;
    setPokedex(pokedex);
}

function getRandomIndex() {
    return Math.floor(Math.random() * data.length);
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
        data[randomIndex1], 
        data[randomIndex2], 
        data[randomIndex3]
    ];
}