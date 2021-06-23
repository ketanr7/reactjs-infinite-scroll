import React from 'react'
import { useState, useEffect } from 'react';

const Timer = (props) => {
   
    const timer = props.timer
   
    const [ minutes, setMinutes ] = useState(10);
    const [seconds, setSeconds ] =  useState(0);
     const [timerOn, setTimerOn] = useState(true);
     
    useEffect(()=>{
        setTimerOn(timer)
        
        if (timerOn) {
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                    setMinutes(2)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
            
          };
      }
    });

    return (
        <div>
        { minutes === 0 && seconds === 0
            ? null
            : <span>{minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</span>
        }
        </div>
    )
}

export default Timer;