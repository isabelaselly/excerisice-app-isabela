import React, { useState } from "react";

const RunningExercise = ({ name }) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [intervalId, setIntervalId] = useState(null); 

  const startTimer = () => {
    if (!running) {
      setRunning(true);
      setTime(0);
      const id = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setRunning(false);
  };

  const recordLap = () => {
    setLaps((prevLaps) => [...prevLaps, time]);
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>
        Time: {String(Math.floor(time / 60)).padStart(2, "0")}:
        {String(time % 60).padStart(2, "0")}
      </p>
      <button onClick={startTimer} disabled={running}>Start</button>
      <button onClick={stopTimer} disabled={!running}>Stop</button> {/* Stop button */}
      <button onClick={() => setTime(0)} disabled={running}>Reset</button>
      <button onClick={recordLap} disabled={!running}>Record Lap</button>
      
      <div>
        <h3>Laps:</h3>
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>
              Lap {index + 1}: {String(Math.floor(lap / 60)).padStart(2, "0")}:
              {String(lap % 60).padStart(2, "0")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RunningExercise;
