import { gottaCatchEmAll, renderNewPokemon } from './utils.js';

const audio = document.getElementById('volume-set');
audio.volume = 0.07;

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
        window.location = './results/index.html';
    } else {
        renderNewPokemon();
    }
});