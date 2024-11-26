import Phaser from "phaser";

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
    // this.player = null;
    // this.score = 0;
    // this.scoreText = null;
  }

  /*
    We need to initialize the scene with the data we passed from the previous scene
    */
  init() {

  }
  // init(data) {
  // this.name = data.name;
  // this.number = data.number;
  // this.next = data.next;
  // this.currentPowerUp = +this.registry.get("currentPowerUp");
  // }

  /*
    Here we create and start all the elements of the game. We create the background, the players, the foes, the shots, the power-ups, the scores, the audios and the colliders.
    */
  create() {
    // this.duration = this.time * 1000;
    // this.width = this.sys.game.config.width;
    // this.height = this.sys.game.config.height;
    // this.center_width = this.width / 2;
    // this.center_height = this.height / 2;
    // new SceneEffect(this).simpleOpen(() => 0);
    // this.addBackground();
    // this.cameras.main.setBackgroundColor(0x333333);
    // this.lights.enable();
    // this.lights.setAmbientColor(0x666666);
    // this.addScores();
    this.addFoes();
    // this.addPlayers();
    // this.addPowerUps();
    // this.addShots();
    // this.loadAudios();
    // this.addColliders();
    this.addBackground();
  }

  addBackground(this) {
    this.background = this.add.image(0, 0, 'map');  // Tho I think we can do this in the bootloader?;
  }

  // GAME METHODS
  // What happens when a unit is spawned, killed, attacks, heals, etc
  // spawnShake() {
  //   const { x, y } = this.lastDestroyedWaveFoe;
  //   this.shake = new PowerUp(this, x, y);
  //   this.powerUps.add(this.shake);
  // }

  /*
    This adds the score text to the scene. We create a group of scores, one for each player. We add the score text to the group and we set the scroll factor to 0 so it will not scroll with the camera.
    */
  // TODO: can I adapt this?
  // addScores() {
  //   this.scores = {
  //     player1: {},
  //     player2: {}
  //   };

  //   this.scores["player1"]["scoreText"] = this.add
  //     .bitmapText(
  //       150,
  //       16,
  //       "wendy",
  //       String(this.registry.get("score_player1")).padStart(6, "0"),
  //       50
  //     )
  //     .setOrigin(0.5)
  //     .setScrollFactor(0);
  //   this.scores["player2"]["scoreText"] = this.add
  //     .bitmapText(this.width - 150, 16, "wendy", "0".padStart(6, "0"), 50)
  //     .setOrigin(0.5)
  //     .setScrollFactor(0);
  // }

  /*
    This adds the players to the scene. We create a group of players but in this particular implementation, we just add one player.
    */
  addPlayers() {
    // this.trailLayer = this.add.layer();
    // this.players = this.add.group();
    // this.player = new Player(this, this.center_width, this.center_height);
    // this.players.add(this.player);
  }

  /*
    Next, we have some functions to add other groups for the game elements.
    */
  // addShots() {
  //   this.shotsLayer = this.add.layer();
  //   this.shots = this.add.group();
  // }

  addFoes(this) {
  //   this.foeGroup = this.add.group();
  //   this.foeWaveGroup = this.add.group();
  //   this.foeShots = this.add.group();
  //   this.foes = new FoeGenerator(this);
    this.darkElves = this.add.group();
  }

  // addPowerUps() {
  //   this.available = ["fruit", "vanila", "chocolate"];
  //   this.powerUps = this.add.group();
  // }

  /*
    Once we have created all groups of elements, we add the colliders between them.
    */
  // Do we need colliders? Gravity is gonna be 0 I guess
  // addColliders() {
  //   this.physics.add.collider(
  //     this.players,
  //     this.foeGroup,
  //     this.crashFoe,
  //     () => {
  //       return true;
  //     },
  //     this
  //   );

  //   this.physics.add.collider(
  //     this.players,
  //     this.foeWaveGroup,
  //     this.crashFoe,
  //     () => {
  //       return true;
  //     },
  //     this
  //   );

  //   this.physics.add.overlap(
  //     this.shots,
  //     this.foeGroup,
  //     this.destroyFoe,
  //     () => {
  //       return true;
  //     },
  //     this
  //   );

  //   this.physics.add.overlap(
  //     this.shots,
  //     this.foeWaveGroup,
  //     this.destroyWaveFoe,
  //     () => {
  //       return true;
  //     },
  //     this
  //   );

  //   this.physics.add.collider(
  //     this.players,
  //     this.powerUps,
  //     this.pickPowerUp,
  //     () => {
  //       return true;
  //     },
  //     this
  //   );

  //   this.physics.add.overlap(
  //     this.players,
  //     this.foeShots,
  //     this.hitPlayer,
  //     () => {
  //       return true;
  //     },
  //     this
  //   );

  //   this.physics.add.collider(
  //     this.shots,
  //     this.foeShots,
  //     this.destroyShot,
  //     () => {
  //       return true;
  //     },
  //     this
  //   );
  //   this.physics.world.on("worldbounds", this.onWorldBounds);
  // }

  /*
    This is called when we destroy a foe that is part of a wave.
    */
  // destroyWaveFoe(shot, foe) {
  //   this.lastDestroyedWaveFoe = {
  //     x: foe.x,
  //     y: foe.y
  //   };
  //   this.destroyFoe(shot, foe);
  // }

  /*
  This is the callback we call when a shot hits a foe. We destroy the shot and we decrease the lives of the foe. If the foe has no more lives, we destroy it and we create an explosion. We also add the points to the score of the player who shoots the foe.
    */
  // destroyFoe(shot, foe) {
  //   foe.lives--;
  //   this.playAudio("foexplosion");
  //   const point = this.lights.addPointLight(shot.x, shot.y, 0xffffff, 10, 0.7);
  //   this.tweens.add({
  //     targets: point,
  //     duration: 400,
  //     scale: {
  //       from: 1,
  //       to: 0
  //     }
  //   });
  //   this.tweens.add({
  //     targets: foe,
  //     duration: 400,
  //     tint: {
  //       from: 0xffffff,
  //       to: 0xff0000
  //     }
  //   });
  //   this.updateScore(shot.playerName, 50);
  //   this.tweens.add({
  //     targets: foe,
  //     y: "-=10",
  //     yoyo: true,
  //     duration: 100
  //   });

  //   shot.destroy();
  //   if (foe.lives === 0) {
  //     this.playAudio("foedestroy");
  //     const point = this.lights.addPointLight(
  //       shot.x,
  //       shot.y,
  //       0xffffff,
  //       10,
  //       0.7
  //     );
  //     this.tweens.add({
  //       targets: point,
  //       duration: 400,
  //       scale: {
  //         from: 1,
  //         to: 0
  //       }
  //     });
  //     this.updateScore(shot.playerName, foe.points);
  //     foe.dead();
  //   }
  // }

  /*
  This one is called when a foe shot hits the player. Unless the player is blinking (because it just started), we destroy the player and we create an explosion. We also destroy the shadow of the shot. Then we respawn the player
    */
  // hitPlayer(player, shot) {
  //   if (player.blinking) return;

  //   this.players.remove(this.player);
  //   player.dead();
  //   this.playAudio("explosion");
  //   shot.shadow.destroy();
  //   shot.destroy();
  //   this.time.delayedCall(1000, () => this.respawnPlayer(), null, this);
  // }

  /*
    This adds a player to the game. We create a tween to make the player blink and then we create a new player.
    */
  // respawnPlayer() {
  //   this.player = new Player(this, this.center_width, this.center_height);
  //   this.player.blinking = true;
  //   this.players.add(this.player);
  //   this.tweens.add({
  //     targets: this.player,
  //     duration: 100,
  //     alpha: {
  //       from: 0,
  //       to: 1
  //     },
  //     repeat: 10,
  //     onComplete: () => {
  //       this.player.blinking = false;
  //     }
  //   });
  // }

  /*
    Here we load all the audio, and we add them to the `this.audios` object. Later we can play them with the `playAudio` method.
    */
  loadAudios() {
    // this.audios = {
    //   shot: this.sound.add("shot"),
    //   foeshot: this.sound.add("foeshot"),
    //   explosion: this.sound.add("explosion"),
    //   foexplosion: this.sound.add("foexplosion"),
    //   foedestroy: this.sound.add("foedestroy"),
    //   stageclear1: this.sound.add("stageclear1"),
    //   stageclear2: this.sound.add("stageclear2"),
    //   boss: this.sound.add("boss")
    // };
  }

  // playAudio(key) {
  //   this.audios[key].play();
  // }

  /*
    The game loop is as simple as this. We update the player and the foes. We also update the background to make it scroll.
    */
  // TODO: does the update only happens when sending a turn? Nah, it gotta happen with each action I guess, but only for the client
  // update() {
  //   if (this.player) this.player.update();
  //   this.foes.update();
  //   this.background.tilePositionY -= 10;
  // }

  /*
    When the player finishes the stage, we destroy all the elements and we start the transition to the next scene.
    */
  endScene() {
    // this.foeWaveGroup.children.entries.forEach((foe) => foe.shadow.destroy());
    // this.foeGroup.children.entries.forEach((foe) => foe.shadow.destroy());
    // this.shots.children.entries.forEach((shot) => shot.shadow.destroy());
    // this.foeShots.children.entries.forEach((shot) => shot.shadow.destroy());
    // this.time.delayedCall(
    //   2000,
    //   () => {
    //     this.finishScene();
    //   },
    //   null,
    //   this
    // );
  }

  /*
    This is the callback for the end of the scene. We stop all the audio, we stop the scene and we start the transition to the next scene.
    */
  finishScene() {
    // this.game.sound.stopAll();
    // this.scene.stop("game");
    // const scene = this.number < 5 ? "transition" : "outro";
    // this.scene.start(scene, {
    //   next: "game",
    //   name: "STAGE",
    //   number: this.number + 1
    // });
  }

  /*
    This is the method we use to update the score of the player. We get the score from the registry and we update it. We also create a tween to make the score text blink.
    */
  // updateScore(playerName, points = 0) {
  //   const score = +this.registry.get("score_" + playerName) + points;
  //   this.registry.set("score_" + playerName, score);
  //   this.scores[playerName]["scoreText"].setText(
  //     String(score).padStart(6, "0")
  //   );
  //   this.tweens.add({
  //     targets: this.scores[playerName]["scoreText"],
  //     duration: 200,
  //     tint: {
  //       from: 0x0000ff,
  //       to: 0xffffff
  //     },
  //     scale: {
  //       from: 1.2,
  //       to: 1
  //     },
  //     repeat: 2
  //   });
  // }
}