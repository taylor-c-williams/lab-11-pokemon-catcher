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
    const pokemon = [
        { id:5,
            quantity:25 }
    ];
    const stringyPokemon = JSON.stringify(pokemon);  
    localStorage.setItem('STRINGYPOKEMON', stringyPokemon);

    const gottenPokemon = localStorage.getItem('STRINGYPOKEMON');
    const gotPokemon = JSON.parse(gottenPokemon);

    const expected = gotPokemon;
    const actual = getPokedex();

    expect.equal(actual, expected);
});
