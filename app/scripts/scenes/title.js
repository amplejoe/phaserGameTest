export default class Title extends Phaser.Scene {
  /**
   *  My custom scene.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super({key: 'Title'});
  }

  /**
   *  Responsible for setting up game objects on the screen.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */
  create(/* data */) {
    //  Save the center point coordinates for later reference.
    const x = this.cameras.main.width / 2;
    const y = this.cameras.main.height / 2;

    //  Add the starry sky background.
    this.add.image(x,y,'sky');

    //  Create and start an particle emitter.
    const flameParticle = this.add.particles('red');
    const flame = flameParticle.createEmitter({
      speed: 100,
      scale: {start: 1, end: 0},
      blendMode: 'ADD'
    });

    //  Add the 'Phaser 3' logo.
    // const logo = this.add.image(x, 100, 'logo');

    //  Add a bouncing Phaser 3 logo.
    const logo = this.physics.add.image(x, 100, 'logo')
      .setVelocity(100, -100)
      .setBounce(1, 1)
      .setCollideWorldBounds(true);
    //  Attach and make the emitter follow the logo.
    flame.startFollow(logo);

    //  Add a text label.
    const label = this.add.text(x, 400, 'START!!', {
      font: '64px Arial',
      color: 'white',
      stroke: 'black',
      strokeThickness: 6
    });

    //  Move the origin point to the center, make the label interactive.
    label
      .setOrigin(0.5, 0.5)
      .setInteractive();
    //  When this label is clicked, move on to the next game scene.
    label.on('pointerup', () => this.scene.start('Game'));


  }

  /**
   *  Handles updates to game logic, physics and game objects.
   *
   *  @protected
   *  @param {number} t - Current internal clock time.
   *  @param {number} dt - Time elapsed since last update.
   */
  update(/* t, dt */) {
  }
}
