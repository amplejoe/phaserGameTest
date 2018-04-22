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
  key: 'char',
  type: 'spritesheet',
  textureUrl: 'dude.png',
  framewidh: 32,
  frameheight: 48
}];
