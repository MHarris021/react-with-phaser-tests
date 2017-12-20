import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">3. Configuring Phaser v3 so Canvas is bigger and changes color</h1>
                </header>
                <Game/>
            </div>
        );
    }
}

export default App;
