import { getPokedex } from '../utils.js';


const ctx = document.getElementById('myChart');
const pokedex = getPokedex();

const arrayOfNames = pokedex
    .filter(pokemon => pokemon.captured > 0)
    .map(pokemon => pokemon.name);

const arrayOfCaptures = pokedex
    .filter(pokemon => pokemon.captured > 0)
    .map(({ captured }) => captured);

const arrayOfEncounters = pokedex
    .filter(pokemon => pokemon.encountered > 0)
    .map(({ encountered }) => encountered);

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: arrayOfNames,
        datasets: [
            {
                label: 'captured',
                data: arrayOfCaptures,
                backgroundColor: [
                    'orange',

                ],
    
                borderWidth: 5
            },
            {
                label: 'encountered',
                data: arrayOfEncounters,
                backgroundColor: [
                    'red',
                    'pink',
                    'yellow',
                    'green',
                    'blue',
                    'purple'
                ],

                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
