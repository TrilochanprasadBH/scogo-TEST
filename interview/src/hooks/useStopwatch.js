//all stopwatch logic must be here 

import { useState, useEffect, useCallback } from "react"

const useStopwatch = () => {
    const [isRunning, setIsRunning]= useState(false);
    const [seconds, setSeconds] = useState(0);
     
    const tick = useCallback(()=>{
        setSeconds((prev)=>prev+1)
    },[])

    const startOrStop = ()=>{
            //  console.log("clicked")
        if(!isRunning){
            setIsRunning(true);   
        }else{
            setIsRunning(false)
        }
    }

    const reset =()=>{
            setIsRunning(false);
            setSeconds(0)
    }

    useEffect(()=>{
          let intervalId;
        if(isRunning){
            intervalId = setInterval(tick, 1000); 
            document.title = String(seconds).padStart(2,0);
        }
         
        return () => clearInterval(intervalId)

    },[isRunning,tick,seconds])

    


    return {startOrStop,reset, seconds, isRunning}

}

export {useStopwatch}