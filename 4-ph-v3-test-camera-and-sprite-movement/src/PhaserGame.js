import Phaser from 'phaser';
import GameScene from "./GameScene"

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-test',
    title: 'Testing React with Phaser v3',
    version: '0.0.1',
    scene:[
        GameScene
    ]

};

export default class PhaserGame extends Phaser.Game {

    constructor() {
        super(config);
    }

}