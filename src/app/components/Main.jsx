import React from 'react';

import Body from './Body';
import Button from './Button';
import Timer from './Timer';
import GameBoard from './GameBoard';

export default class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gameRunning: true
        };

        // bind functions
        this.pauseGame = this.pauseGame.bind(this);
        this.resumeGame = this.resumeGame.bind(this);
    }

    pauseGame() {
        console.log("Pausing Game");
        this.setState({gameRunning: false});
    }

    resumeGame() {
        console.log("Resuming Game");
        this.setState({gameRunning: true});
    }

    render() {

        return (
            <div className="flex-col flex-center main black-bg">
                <div className="flex-row buttonCont flex-center">
                    <Button buttonText='Pause Animation' onClick={this.pauseGame} />
                    <Button buttonText='Start Animation' onClick={this.resumeGame} />
                    <Timer gameRunning={this.state.gameRunning} />
                </div>
                <div className="flex-col flex-center gameCont">
                    <GameBoard gameRunning={this.state.gameRunning}/>
                </div>
            </div>
        );
    }
}
