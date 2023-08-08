import React from 'react';
import './Pokecard.css';

// Show each pokemon in an individual card
// Display their name, image, type, and exp

const typeColors = {
    Water: 'blue',
    Fire: 'red',
    Grass: 'green',
    Fairy: 'pink',
    Ghost: 'purple',
    Normal: 'black',
    Electric: '#e0e00d',
    Flying: 'lightskyblue'
}

const Pokecard = ({ id, name, type, exp }) => {
	const pokeSnap = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const typeStyle = {
        color: typeColors[type] || 'black', 
        fontWeight: 'bold',
    }

	return (
		<div className={`dexCard ${type}`}>
			<h2 className="pokeName">{name}</h2>
			<img src={pokeSnap} alt={name} />
			<p className="pokeType" style={typeStyle}>Type: {type}</p>
			<p>Exp: {exp}</p>
		</div>
	);
};

export default Pokecard;
