import React from 'react';

export default class GameBoard extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {


        var canvasDom = document.createElement('canvas');
        canvasDom.className = "gameBoard";
        var context = canvasDom.getContext("2d");
        context.fillStyle = "red";
        context.fillRect(10, 10, 100, 50);

        return (
            {canvasDom}
        );
    }
}
