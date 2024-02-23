// Timer.jsx
import { useState, useEffect } from "react";

function Timer() {
  // state to track the countdown
  const [count, setCount] = useState(10);

  const [isActive, setIsActive] = useState(true)

  // useEffect to set up an interval that decreases the count state every second
  useEffect(() => {
    // create a variable to store the interval id
    let interval;

    // if count is positive, start the interval
    if (isActive ) {
      interval = setInterval(() => {
        setCount((prev) => {
          if (prev <= 1){
            setIsActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    // cleanup function to clear the interval when the component unmounts or before re-running the effect
    return () => clearInterval(interval);

  }, [isActive]); // re-run the effect when count changes

  return (
    <>
      <h2>Timer Countdown: {count}</h2>
      <button onClick={() => setIsActive(!isActive)}>Pause</button>
      <button onClick={() => setCount(10)}>Reset</button>
      <button onClick={() => setIsActive(true)}>Resume</button>
      <h4>Toggle button to hide the timer</h4>
    </>
  );
}

export default Timer;