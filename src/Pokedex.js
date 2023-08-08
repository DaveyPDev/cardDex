import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

// Is provided, via props, an array of objects describing different pokemon, and renders a sequence of Pokecard components.

const Pokedex = ({ dexList }) => (
	<div className="pokedex">
		{dexList.map((pokemon) => (
			<Pokecard key={pokemon.id} id={pokemon.id} name={pokemon.name} type={pokemon.type} exp={pokemon.exp} />
		))}
	</div>
);

const dexData = [
	{ id: 4, name: 'Charmander', type: 'Fire', exp: 62 },
	{ id: 7, name: 'Squirtle', type: 'Water', exp: 63 },
	{ id: 1, name: 'Bulbasaur', type: 'Grass', exp: 61 },
	{ id: 12, name: 'Butterfree', type: 'Flying', exp: 178 },
	{ id: 25, name: 'Pikachu', type: 'Electric', exp: 112 },
	{ id: 35, name: 'Clefairy', type: 'Fairy', exp: 98 },
	{ id: 94, name: 'Gengar', type: 'Ghost', exp: 225 },
	{ id: 133, name: 'Eevee', type: 'Normal', exp: 65 }

	// You can catch more Pokemon objects here
];

// Current Dex Enteries of caught Pokemon

Pokedex.defaultProps = {
	dexList : dexData
};

export { Pokedex, dexData };
