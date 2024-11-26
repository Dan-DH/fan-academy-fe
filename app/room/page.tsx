'use client';

import { useEffect } from 'react';

export default function RoomPage() {
  useEffect(() => {
    // Dynamically import the game script to initialize the Phaser game
    import('../_game/testGame').then((_module) => {
      console.log('Game should have loaded by now');
    });

    return () => {
      // Clean up game resources when the component unmounts (optional)
      // If you use Phaser with persistent state, you may need to stop the game
    };
  }, []);

  return (
    <div id="phaser-game-container"></div>
  );
}