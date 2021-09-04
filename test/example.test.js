// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { setPokedex, getPokedex, encounterPokemon } from '../utils.js';

const test = QUnit.test;


//Set
test('setPokemon should store JSON data accurately', (expect) => {

    const pokemon = [
        { id:5,
            quantity:25 }
    ];
   
    const stringyPokemon = localStorage.getItem('POKEMON');
    const unstringyPokemon = JSON.parse(stringyPokemon);

    const expected = unstringyPokemon;
    const actual = setPokedex(pokemon);

    expect.equal(actual, expected);
});

//Get
test('Get should retrieve JSON data accurately', (expect) => {
    const pokemonArray = [
        { id:5,
            quantity:25 }
    ];

    const lemon = JSON.stringify(pokemonArray);  
    localStorage.setItem('POKEDEX', lemon);
    localStorage.getItem('POKEDEX');
 
    const expected = pokemonArray; 	
    const actual = getPokedex();

    expect.deepEqual(actual, expected);
});

//Encounter
test('encounterPokemon should increase encountered property', (expect) => {
    const pokemonArray = [
        { id:5,
            quantity:25, 
            encountered:2
        }
    ];

    const expected = pokemonArray.id; 
    const actual = encounterPokemon(Number(5));

    expect.equal(actual, expected);
});

