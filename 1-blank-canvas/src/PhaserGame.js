import demo from './Demo';

window.PIXI = require('phaser/build/custom/pixi');
window.p2 = require('phaser/build/custom/p2');
window.Phaser = require('phaser');

let Phaser = window.Phaser;

export default class PhaserGame extends Phaser.Game {

    constructor() {
        super(1500, 1000, Phaser.AUTO, 'phaser-test', demo.state0);
    }

    start() {
        this.state.start();
    }

}