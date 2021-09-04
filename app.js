import { encounterPokemon, gottaCatchEmAll } from './local-storage-utils.js';
import { getRandomPokemon } from './utils.js';

let captured = 0;
const form = document.querySelector('form');

function renderNewPokemon() {
    const wildPokemon = getRandomPokemon();
    const labels = document.querySelectorAll('label');

    labels.forEach((label, i) => {
        const pokemonItem = wildPokemon[i];
        encounterPokemon(pokemonItem.id);
        label.children[0].value = pokemonItem.id;
        label.children[1].src = pokemonItem.url_image;
    });
}

renderNewPokemon();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    captured++;
    const data = new FormData(form);
    const selectedPokemonId = data.get('poke');
    gottaCatchEmAll(selectedPokemonId);
    if (captured > 10) {
        window.location = './results';
    } else {
        renderNewPokemon();
    }
});
