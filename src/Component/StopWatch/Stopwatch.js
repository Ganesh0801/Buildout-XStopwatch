import React,{useState,useEffect} from 'react';
import styles from "./Stopwatch.module.css";

const Stopwatch = () => {
   const[time,setTime] = useState(0);
   const [isRunning,setIsRunning] = useState(false);

   const startStop = () => {
    setIsRunning(!isRunning)
 } 

 const reset = () => {
    setIsRunning(false)
     setTime(0)
  }


   const timeSetting = (sec)=>{
      let min = Math.floor(sec/60);
      let Sec = sec % 60
     return `${min}:${Sec < 10 ? "0" : ""}${Sec}`
   }


   useEffect(()=>{
    let interval;
    if (isRunning){
     interval= setInterval(()=>{
       setTime((prevElapsedTime) => prevElapsedTime + 1)
     }, 1000);
    } else {
      clearInterval(interval)
     }
     return ()=> clearInterval(interval)
   },[isRunning])
  return (
    <>
     {/* <div className={styles.container}>
        <h1 className={styles}>Stop Watch</h1>
        <h1 className={styles.display}>time : {timeSetting(time)}</h1>
        <div className={styles.button}>
           <button onClick={startStop} className={styles.start}>{isRunning ? "Stop" : "Start"}</button>
           <button onClick={reset} className={styles.stop}>Reset</button>
        </div>
     </div> */}


<div className={styles.parent}>
        <h1>Stopwatch</h1>
        <p>Time: {timeSetting(time)}</p>
        <button onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={reset} className={styles.buttonSpace}>Reset</button>
    </div>
    </>
  )
}

export default Stopwatch;