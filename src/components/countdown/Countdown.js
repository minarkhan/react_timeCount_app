import React from 'react';
import { Digit } from './digit/Digit';

const Countdown = (props) => {
    
    return (
        <div className="d-flex my-4">
            <Digit value={props.time.min} color="red" />
            <Digit value={props.time.sec} color="green" />
            <Digit value={props.time.mili} color="blue" />
        </div>
    )
}

export default Countdown;

