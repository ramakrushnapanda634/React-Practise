import {useState,useEffect} from "react";
//var timer=undefined;
const StopWatch=()=>{
    const [watch,setWatch]=useState(0);
    useEffect(()=>{
        setInterval(()=>{
            setWatch(watch+1);
        },1000)
    })

//     const handleStart=()=>{
// timer=setInterval(()=>{
//     setWatch((watch)=>watch+1)
// },1000)
//     }
//     const handleReset=()=>{
//         setWatch(0)
// clearInterval(timer);
//     }
//     const handleStop=()=>{
// clearInterval(timer)
//     } 
    return(
        <div>
            <h1>{watch}</h1>
            {/* <button onClick={handleStart}>Start</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleStop}>Stop</button> */}
        </div>
    )
}
export default StopWatch;