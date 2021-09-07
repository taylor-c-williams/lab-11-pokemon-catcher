import { getPokedex } from '../utils.js';

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


const ctx = document.getElementById('myChart').getContext('2d');

Chart.defaults.font.size = 16;
Chart.defaults.font.family = 'Space Mono', 'monospace';



const myChart = new Chart(ctx, { //eslint-disable-line

    type: 'bar',
    data: {
        labels: arrayOfNames,
        datasets: [
            {
                label: 'Times Captured',
                data: arrayOfCaptures,
                backgroundColor: 'rgba(255, 109, 0,0.7)', 
                borderColor: '#A7F323',
                pointBorderColor: 'rgba(255, 109, 0,0.7)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                borderWidth: 4,
                hoverBorderWidth: 3,
                hoverBorderColor:'#000',
                type:'line'
        
            },
            {
                label: 'Times Encountered',
                data: arrayOfEncounters,
                backgroundColor: 'rgba(193, 158, 224,0.7)',
                borderColor: 'rgba(98, 71, 170,1)',
                pointBorderColor: '#fff',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        maintainAspectRatio: true,
        responsive: false,
        title: {
            text: 'Pokemon Encountered vs Pokemon Captured!'
        },
    }
});


