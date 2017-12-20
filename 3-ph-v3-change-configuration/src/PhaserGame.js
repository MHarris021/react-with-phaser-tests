import Phaser from 'phaser';

var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#ff0303',

};

export default class PhaserGame extends Phaser.Game {

    constructor() {
        super(config);
    }

}