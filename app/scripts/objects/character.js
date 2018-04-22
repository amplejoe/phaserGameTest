export default class Character extends Phaser.GameObjects.Sprite {
  /**
   *  My custom sprite.
   *
   *  @constructor
   *  @class Character
   *  @extends Phaser.GameObjects.Sprite
   *  @param {Phaser.Scene} scene - The scene that owns this sprite.
   *  @param {number} x - The horizontal coordinate relative to the scene viewport.
   *  @param {number} y - The vertical coordinate relative to the scene viewport.
   */
  constructor(scene, x, y) {
    super(scene, x, y, 'char');

    //  Add this game object to the owner scene.
    scene.children.add(this);

    // this.setPosition(x_pos, y_pos);
    // this.setOrigin(0.5);

    //, { start: 0, end: 3, zeroPad: 1, prefix: 'guy_', suffix: '.png'}

    // this.anims.create({
    //     key: 'left',
    //     frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    //     frameRate: 10,
    //     repeat: -1
    // });
    // let frameNames = [{key:'char', frame:'guy_01.png'}, {key:'char', frame:'guy_02.png'}, {key:'char', frame:'guy_03.png'}];

    // let frameNames = scene.anims.generateFrameNumbers('char', { start: 0, end: 3 });
    // console.log(frameNames);
    scene.anims.create({
      key: 'left',
      frames: scene.anims.generateFrameNumbers('char', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });
    scene.anims.create({
      key: 'right',
      frames: scene.anims.generateFrameNumbers('char', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });
    scene.anims.create({
      key: 'pose',
      frames: [ { key: 'char', frame: 4 } ],
      frameRate: 10,
      repeat: -1
    });
    // this.anims.play('down');
    this.anims.play('pose', false);

    // this.anims.add('right', [4, 5, 6, 7], 10, true);
    // this.anims.add('left', [8, 9, 10, 11], 10, true);
    // this.anims.add('up', [12, 13, 14, 15], 10, true);

    this.cursors = scene.input.keyboard.createCursorKeys();

  }

  controlCharacter()
  {
    if (this.cursors.left.isDown)
    {
      // player.setVelocityX(-160);
      this.anims.play('left', true);
      this.x--;
    }
    else if (this.cursors.right.isDown)
    {
      // player.setVelocityX(160);
      this.anims.play('right', true);
      this.x++;
    }
    else if (this.cursors.up.isDown)
    {
      // player.setVelocityX(0);
      this.anims.play('pose', false);
      this.y--;
    }
    else if (this.cursors.down.isDown)
    {
      // this.sc.anims.play('down', true);
      this.anims.play('pose', false);
      this.y++;
    }
  }

  update() {
    this.controlCharacter();
  }

}
