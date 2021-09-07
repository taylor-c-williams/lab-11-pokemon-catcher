// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { setPokedex, getPokedex, encounterPokemon, gottaCatchEmAll } from '../utils.js';
// import data from '../data.js';

const test = QUnit.test;


//Set
test('setPokemon should store JSON data accurately', (expect) => {

    const pokemon = [
        { id:5,
            quantity:25,
            captured: 0 }
    ];
   
    const stringyPokemon = localStorage.getItem('POKEMON');
    const unstringyPokemon = JSON.parse(stringyPokemon);

    const expected = unstringyPokemon;
    const actual = setPokedex(pokemon);

    expect.equal(actual, expected);
});


//Get
test('getPokemon should retrieve JSON data accurately', (expect) => {
    const pokemonArray = [
        { id:5,
            quantity:25,
            captured: 0 }
    ];

    const lemon = JSON.stringify(pokemonArray);  
    localStorage.setItem('POKEDEX', lemon);
    localStorage.getItem('POKEDEX');
 
    const expected = pokemonArray; 	
    const actual = getPokedex();

    expect.deepEqual(actual, expected);
});


//Encounter
test('encounterPokemon should increase encountered value', (expect) => {
    const pokemonArray = [];

    setPokedex(pokemonArray);
    encounterPokemon(5);

    const expected = [
        { captured: 0, 
            encountered:1,
            id: 5,
            name:`charmander`
        }
    ];


    const actual = getPokedex();

    expect.deepEqual(actual, expected);
});


//Gotta Catch 'Em All!
test('gottaCatchEmAll should increase the captured value', (expect) => {

    const dingus = [
        { id:5,
            quantity:25,
            captured: 1 }
    ];

    setPokedex(dingus);
    gottaCatchEmAll(5);

    const expected = [
        { id:5,
            quantity:25,
            captured: 2 }
    ];
    const actual = getPokedex(dingus);
    expect.deepEqual(actual, expected);
});

//Render
// test('renderNewPokemon should populate 3 random pokemon and 3 corresponding images', (expect) =>{

//     renderNewPokemon();

//     const expected = dingus;
//     const actual = getPokedex(dingus);
//     expect.deepEqual(actual, expected);
//     });