import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 85 },
    { name: 'Rohit Sharma', score: 90 },
    { name: 'Shubman Gill', score: 65 },
    { name: 'KL Rahul', score: 45 },
    { name: 'Hardik Pandya', score: 75 },
    { name: 'Ravindra Jadeja', score: 60 },
    { name: 'Jasprit Bumrah', score: 95 },
    { name: 'Mohammed Shami', score: 50 },
    { name: 'Rishabh Pant', score: 88 },
    { name: 'Suryakumar Yadav', score: 40 },
    { name: 'Yuzvendra Chahal', score: 72 },
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - Score: {player.score}</li>
        ))}
      </ul>

      <h3>Players with Score Below 70</h3>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - Score: {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;