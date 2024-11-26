import Phaser from 'https://cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.min.js';
import Bootloader from "./bootLoader";
import Game from "./game";

const config = {
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  // autoRound: false,
  parent: "game-room",
  physics: {
    default: "arcade"
    // scene: [Bootloader, Splash, Transition, Game, Outro]
  },
  scene: [Bootloader, Game]
};

export const game = new Phaser.Game(config);