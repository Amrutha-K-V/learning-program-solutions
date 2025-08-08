import React from 'react';

const IndianPlayers = () => {
  const oddTeam = ['Virat', 'Gill', 'Hardik', 'Pant', 'Chahal'];
  const evenTeam = ['Rohit', 'Rahul', 'Jadeja', 'Bumrah', 'Shami'];

  // Destructuring
  const [odd1, odd2, ...oddRest] = oddTeam;
  const [even1, even2, ...evenRest] = evenTeam;

  const T20players = ['Virat', 'Rohit', 'Pant'];
  const RanjiTrophyPlayers = ['Gill', 'Jadeja', 'Shami'];

  // Merging arrays
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <p>{odd1}, {odd2}, {oddRest.join(', ')}</p>

      <h2>Even Team Players</h2>
      <p>{even1}, {even2}, {evenRest.join(', ')}</p>

      <h3>Merged T20 and Ranji Trophy Players</h3>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;