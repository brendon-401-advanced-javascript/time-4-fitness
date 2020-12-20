import React from 'react';
import { useCountdownTimer } from 'use-countdown-timer';
import {Button} from 'react-bootstrap';



export default function Timer (props) {

      const { countdown, start, reset, pause, isRunning } = useCountdownTimer({
        timer: 1000*60,
      });
    
      return (
        <React.Fragment>
            <div className='timer'>
                <h1>{countdown}</h1>
                <Button onClick={reset} variant="outline-warning">Reset</Button>
                {isRunning ? (
                    <Button onClick={pause} variant="outline-danger">Stop</Button>
                ) : (
                    <Button onClick={start} variant="info">Start</Button>
                )}
            </div>
        </React.Fragment>
      );
}

