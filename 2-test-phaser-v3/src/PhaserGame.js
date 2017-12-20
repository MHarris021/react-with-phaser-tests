import demo from "./Demo";

import Phaser from 'phaser';


export default class PhaserGame extends Phaser.Game {

    constructor() {
        super(2500, 1500, Phaser.AUTO, 'phaser-test', demo.state0);
    }


}