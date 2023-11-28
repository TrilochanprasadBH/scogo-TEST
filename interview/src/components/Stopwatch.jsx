import React from 'react'
import { useStopwatch } from '../hooks/useStopwatch'

const Stopwatch = () => {
  const {startOrStop, reset, seconds, isRunning} = useStopwatch();
  
  
    return (
    <div>
        <p>stopwatch</p>
        <p>{seconds}<span>s</span></p>
        <button onClick={startOrStop}>{isRunning ? "Stop":"Start"}</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Stopwatch 
