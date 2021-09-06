import { gottaCatchEmAll, renderNewPokemon } from './utils.js';

let captured = 0;
const form = document.querySelector('form');

renderNewPokemon();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    captured++;
    const data = new FormData(form);
    const selectedPokemonId = data.get('wild-pokemon');
    gottaCatchEmAll(selectedPokemonId);
    if (captured > 10) {
        window.location = './results/results.html';
    } else {
        renderNewPokemon();
    }
});