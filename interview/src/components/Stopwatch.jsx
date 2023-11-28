import React from 'react'
import { useStopwatch } from '../hooks/useStopwatch'
// import {Box, Button,} from "@mui/material";

const Stopwatch = () => {
  const {startOrStop, reset, seconds, isRunning, minutes,leftSeconds} = useStopwatch();
  
  
    return (
    <div>
        <h1>Scogo Stopwatch</h1>
      <div>
        {seconds> 60 ? <span>{String(minutes).padStart(2,0)}<span>m</span> <span>{String(leftSeconds).padStart(2,0)}<span>s</span></span> </span> : null} 
        { seconds <60 ? <span>{String(seconds).padStart(2,0)}<span>s</span></span> : null }
      </div>
        <button onClick={startOrStop}>{isRunning ? "STOP":"START"}</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Stopwatch 
