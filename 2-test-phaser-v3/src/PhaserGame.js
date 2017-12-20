import demo from "./Demo";

import Phaser from 'phaser';


export default class PhaserGame extends Phaser.Game {

    constructor() {
        super(1500, 1000, Phaser.AUTO, 'phaser-test', demo.state0);
    }

    start() {
        this.state.start();
    }

}