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

        // bind functions
    }

    render() {
        return (
            <div style={this.styles.buttonCont} onClick={this.props.onClick}>
                {this.props.buttonText}
            </div>
        );
    }
}
