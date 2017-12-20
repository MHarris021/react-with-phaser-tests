import React, {Component} from 'react'
import PhaserGame from "./PhaserGame";


export default class Game extends Component {
    constructor() {
        super();
        this.game = {};
    }

    componentDidMount() {
        this.game = new PhaserGame();

    }

    render() {
        return (
            <div id='phaser-test' className="Phaser"></div>
        );
    }
}