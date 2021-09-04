// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { setPokedex, getPokedex } from '../utils.js';

const test = QUnit.test;

test('setPokemon should store JSON data accurately', (expect) => {

    const pokemon = [
        { id:5,
            quantity:25 }
    ];
   
    const stringyPokemon = localStorage.getItem('POKEMON');
    const unstringyPokemon = JSON.parse(stringyPokemon);
    const expected = unstringyPokemon;
        //Act 
    // Call the function you're testing and set the result to a const
    const actual = setPokedex(pokemon);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

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
