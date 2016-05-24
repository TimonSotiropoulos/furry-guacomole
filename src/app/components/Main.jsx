import React from 'react';

import Body from './Body';
import Button from './Button';

export default class Main extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="flex-col flex-center main black-bg">
                <div className="flex-row buttonCont flex-center">
                    <Button buttonText='Pause Animation'/>
                    <Button buttonText='Start Animation'/>
                </div>
                <div className="gameCont">

                </div>
            </div>
        );
    }
}
