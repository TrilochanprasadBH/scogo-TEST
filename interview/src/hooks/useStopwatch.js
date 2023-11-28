//all stopwatch logic must be here 

import { useState, useEffect, useCallback } from "react"

const useStopwatch = () => {
    const [isRunning, setIsRunning]= useState(false);
    const [seconds, setSeconds] = useState(0);
    // const [minutes, setMinutes]= useState(0); 

    const minutes = Math.floor(seconds/60);
   let leftSeconds = seconds%60;

    console.log(minutes);
    console.log(leftSeconds);

    
    const tick = useCallback(()=>{
        setSeconds((prev)=>prev+1)
        //core logic to run seconds 
    },[])

    const startOrStop = ()=>{
            
        if(!isRunning){
            setIsRunning(true);   
        }else{
            setIsRunning(false)
        }
    }

    const reset =()=>{
            setIsRunning(false);
            setSeconds(0)
            //resets all to 0  
    }

    useEffect(()=>{
        //runs on mount 
        
        let intervalId;
        if(isRunning){
            intervalId = setInterval(tick, 1000); 
            document.title = String(seconds).padStart(2,0);
        }
         
        if(seconds===0){
            document.title = 'Scogo Stopwatch'
        }
        return () => clearInterval(intervalId)
        //on unmount this clean up 

    },[isRunning,tick,seconds])

    


    return {startOrStop,reset, seconds, isRunning, minutes,leftSeconds}

}

export {useStopwatch}