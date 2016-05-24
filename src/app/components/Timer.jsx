import React from 'react';

export default class Timer extends React.Component {

    constructor(props) {
        super(props);

        // bind functions
        this.runAnimation = this.runAnimation.bind(this);
    }

    runAnimation(timestamp) {
        if (this.props.gameRunning) {
            window.requestAnimationFrame(this.runAnimation);
        }
    }

    render() {
        // if (this.props.gameRunning) {
        //     window.requestAnimationFrame(this.runAnimation);
        // }

        var animationStatus = this.props.gameRunning ? "Run Run Run" : "Paused";

        return (
            <div>
                {animationStatus}
            </div>
        );
    }
}
