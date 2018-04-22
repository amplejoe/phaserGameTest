/*
 *  `assets` module
 *  ===============
 *
 *  Static assets to be loaded. Files are declared using 'Scene Asset Payload'
 *  format. Assets are assumed to live in the `app/static/assets/` folder.
 */

/**
 *  Splash screen assets.
 */
export const splashScreenAssets = [{
  key: 'splash-screen',
  type: 'image'
}, {
  key: 'progress-bar',
  type: 'image'
}, {
  key: 'sky',
  type: 'image',
  url: 'space3.png'
}, {
  key: 'red',
  type: 'image'
}
];

/**
 *  General assets used throughout the game.
 */
export const gameAssets = [{
  key: 'logo',
  type: 'image'
}, {
  // see https://photonstorm.github.io/phaser3-docs/loader_filetypes_index.js.html
  // and https://photonstorm.github.io/phaser3-docs/loader_filetypes_SpriteSheetFile.js.html
  key: 'char',
  type: 'spritesheet',
  url: 'dude.png',
  config: {frameWidth: 32,  frameHeight: 48}
}, {
  // starling xml not yet implemented?
  key: 'charxml',
  type: 'xml',
  url: 'char_anim.xml',
  // path: 'char_anim.png'
}];
