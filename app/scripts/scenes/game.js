import Logo from '@/objects/logo';
import Character from '@/objects/character';

export default class Game extends Phaser.Scene {
  /**
   *  A sample Game scene, displaying the Phaser logo.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super({key: 'Game'});
  }

  /**
   *  Called when a scene is initialized. Method responsible for setting up
   *  the game objects of the scene.
   *
   *  @protected
   *  @param {object} data Initialization parameters.
   */
  create(/* data */) {
    //  TODO: Replace this content with really cool game code here :)
    this.logo = this.add.existing(new Logo(this));

    // character
    const x_pos = this.cameras.main.width / 2;
    const y_pos = this.cameras.main.height / 2;
    this.character = this.add.existing(new Character(this, x_pos, y_pos));
  }

  /**
   *  Called when a scene is updated. Updates to game logic, physics and game
   *  objects are handled here.
   *
   *  @protected
   *  @param {number} t Current internal clock time.
   *  @param {number} dt Time elapsed since last update.
   */
  update(/* t, dt */) {
    this.logo.update();
    this.character.update();
  }
}
