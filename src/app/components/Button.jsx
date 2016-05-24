import React from 'react';

export default class Button extends React.Component {

    constructor(props) {
        super(props);

        this.styles = {
            buttonCont: {
                width: '200px',
                height: '20px',
                padding: '20px 50px',
                margin: '0 20px',
                backgroundColor: '#999999',
                color: 'white',
                alignText: 'center',
            },
        };
    }

    handleClick() {
        console.log("Button Clicked!");

    }

    render() {
        return (
            <div style={this.styles.buttonCont} onClick={this.handleClick}>
                {this.props.buttonText}
            </div>
        );
    }
}
