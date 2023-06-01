const fs = require('fs/promises');
const functions = require('./functions');

const randomNumber = (maxNum) => Math.floor(Math.random() * maxNum - 1);

const leerPokemones = async () => {
	const pokemones = await fs.readFile('pokemones.txt');
	const arrayPokemones = JSON.parse(pokemones);
	let randomIndex = Math.abs(randomNumber(arrayPokemones.length));
	let nombrePokemon = arrayPokemones[randomIndex];
	functions.leerData(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
};
leerPokemones();
