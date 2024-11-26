import Phaser from "phaser";

export default class Bootloader extends Phaser.Scene {
  constructor() {
    super({ key: "bootloader" });
  }

  /*
    Here we split the loading of the assets into different functions.
    */
  preload() {
    // this.createBars();
    // this.setLoadEvents();
    // this.loadFonts();·
    this.loadImages();
    // this.loadAudios();
    // this.loadSpritesheets();
    // this.setRegistry();
  }

  /*
    These are the events we need to control the loading bar and change to splash scene when complete.
    */
  setLoadEvents() {
    this.load.on(
      "progress",
      function (this, value) {
        this.progressBar.clear();
        this.progressBar.fillStyle(0x0088aa, 1);
        this.progressBar.fillRect(
          this.cameras.main.width / 4,
          this.cameras.main.height / 2 - 16,
          this.cameras.main.width / 2 * value,
          16
        );
      },
      this
    );

    this.load.on(
      "complete",
      () => {
        this.scene.start("splash");
      },
      this
    );
  }

  /*
    Load the fonts we use in the game.
    */
  loadFonts() {
    this.load.bitmapFont(
      "wendy",
      "assets/fonts/wendy.png",
      "assets/fonts/wendy.xml"
    );
  }

  /*
    Load the images we use in the game.
    */
  loadImages() {
    this.load.image("map", "/gameAssets/map.webp");
    this.load.image("priestess", "/gameAssets/darkElves/priestess.png");
  //   Array(4)
  //     .fill(0)
  //     .forEach((_, i) => {
  //       this.load.image(`stage${i + 1}`, `assets/images/stage${i + 1}.png`);
  //     });
  }

  /*
    Load the audio (sound effects and music) we use in the game.
    */
  loadAudios() {
    this.load.audio("shot", "assets/sounds/shot.mp3");
    Array(3)
      .fill(0)
      .forEach((_, i) => {
        this.load.audio(`music${i + 1}`, `assets/sounds/music${i + 1}.mp3`);
      });
  }

  /*
    Load the sprite sheets (animated images) we use in the game.
    */
  loadSpritesheets() {
    this.load.spritesheet("player1", "assets/images/player1.png", {
      frameWidth: 64,
      frameHeight: 64
    });
  }

  /*
    Set the initial values of the registry. The game was designed to be played by two players, but it can be played by one.
    */
  setRegistry() {
    this.registry.set("score_player1", 0);
    this.registry.set("power_player1", "water");
    this.registry.set("lives_player1", 0);
    // TODO: this needs to check is a registry already exists (has been passed) so it can reopen a game
  }
  /*
    Create the bars we use to show the loading progress.
    */
  createBars() {
    // https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/?a=13
  }
}