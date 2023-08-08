
import React, { useState, useEffect } from 'react';
import './App.css';
import { Pokedex, dexData } from './Pokedex';
import Pokecard from './Pokecard'
import './Pokecard.css'
import './Pokedex.css'

function App () {
	return (
		<div className="App">
			<Pokedex dexList={dexData} />
		</div>
	);
}

export default App;


/* Start of PokeWar game */


// function shuffleDeck(deck) {
//   // add shuffling algorithm 
//   // return shuffled decks
// }

// function PokeWar() {
// 	const [player1Deck, setPlayer1Deck] = useState([]);
// 	const [player2Deck, setPlayer2Deck] = useState([]);
// 	const [gameOver, setGameOver] = useState(false); 	// game over
// 	const [gameStarted, setGameStarted] = useState(false); 	// Game / New game start
  

// 	useEffect(() => {
// 		if (gameStarted) {
// 		  // Shuffle decks and start new game
// 		  const initialDeck = [
// 			// Define Pokecards here, with id, name, type, and exp
// 		  ];
	
// 		  const shuffledDeck = shuffleDeck(initialDeck);
// 		  const halfDeckSize = Math.ceil(shuffledDeck.length / 2);
	
// 		  setPlayer1Deck(shuffledDeck.slice(0, halfDeckSize));
// 		  setPlayer2Deck(shuffledDeck.slice(halfDeckSize));
// 		}
// 	  }, [gameStarted]);

//   // Implement game logic and handlers here

//   const handleStartGame = () => {
//     setGameStarted(true);
//   };

//   return (
//     <div className="pokeWar">
//       {/* Render player1Deck and player2Deck */}
//       <div className="player-deck">
//         {player1Deck.map((card) => (
//           <Pokecard
//             key={card.id}
//             id={card.id}
//             name={card.name}
//             type={card.type}
//             exp={card.exp}
//           />
//         ))}
//       </div>
//       <div className="player-deck">
//         {player2Deck.map((card) => (
//           <Pokecard
//             key={card.id}
//             id={card.id}
//             name={card.name}
//             type={card.type}
//             exp={card.exp}
//           />
//         ))}
//       </div>
//       {/* Implement game UI and controls */}
//     </div>
//   );
// }
  

