import React from 'react';

import Body from './Body';
import Button from './Button';

export default class Main extends React.Component {

    constructor(props) {
        super(props);

        this.styles = {
            main: {
                width: '100%',
                height: '100vh',
                'backgroundColor': '#000'
            },
            
        }

    }

    render() {

        return (
            <div style={this.styles.main}>
                <div style={}></div>
                <Button buttonText='Pause Animation'/>
                <Button buttonText='Start Animation'/>


            </div>
        );
    }
}
