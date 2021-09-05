import data from './data.js';

// Set
export function setPokedex(pokedexArray){
    const stringDex = JSON.stringify(pokedexArray);
    localStorage.setItem('POKEDEX', stringDex);
}

// Get
export function getPokedex(){
    let stringDex = localStorage.getItem('POKEDEX');
    if (!stringDex) {
        return [];
    }
    return JSON.parse(stringDex);
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

//Render
export function renderNewPokemon() {
    const wildPokemon = getRandomPokemon();
    const labels = document.querySelectorAll('label');

    labels.forEach((label, i) => {
        const pokemonItem = wildPokemon[i];
        encounterPokemon(pokemonItem.id);
        label.children[0].value = pokemonItem.id;
        label.children[1].src = pokemonItem.url_image;
    });
}

//Encounter
//A wild data has appeared! 
export function encounterPokemon(id){
    const pokedex = getPokedex();
    const encountered = pokeFind(id);
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

//Catch
export function gottaCatchEmAll(id){
    pokeFind(id);
    const pokedex = getPokedex();
    pokeFind.captured++;
    setPokedex(pokedex);
}

//Get Random
function getRandomIndex() {
    return Math.floor(Math.random() * data.length);
}

function pokeFind(id){
    const pokedex = getPokedex();
    pokedex.find(data => Number(data.id) === Number(id));
}