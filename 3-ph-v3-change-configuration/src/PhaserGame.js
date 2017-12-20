import Phaser from 'phaser';

var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#ababab',

};

export default class PhaserGame extends Phaser.Game {

    constructor() {
        super(config);
    }

}