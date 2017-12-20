import Phaser from 'phaser';

var config = {
    type: Phaser.WEBGL,
    width: 2000,
    height: 1000,
    backgroundColor: '#ff0303',
    parent: 'phaser-test'

};

export default class PhaserGame extends Phaser.Game {

    constructor() {
        super(config);
    }

}