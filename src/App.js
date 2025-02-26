import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./components/RunningExercise"; // Corrected import

const App = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { name: "Push-ups", type: "repetition" },
    { name: "Running", type: "running" }, // Change "duration" to "running"
    { name: "Jumping Jacks", type: "repetition" },
    { name: "Plank", type: "duration" },
  ];

  return (
    <div>
      <h1>Exercise Tracker</h1>

      {!selectedExercise && (
        <div>
          <h2>Select an Exercise:</h2>
          {exercises.map((exercise) => (
            <button key={exercise.name} onClick={() => setSelectedExercise(exercise)}>
              {exercise.name}
            </button>
          ))}
        </div>
      )}

      {selectedExercise && (
        <div>
          {selectedExercise.type === "repetition" ? (
            <RepetitionExercise name={selectedExercise.name} />
          ) : selectedExercise.type === "running" ? ( // Check for "running" type
            <RunningExercise name={selectedExercise.name} /> // Render RunningExercise
          ) : (
            <DurationExercise name={selectedExercise.name} />
          )}
          <button onClick={() => setSelectedExercise(null)}>Go Back</button>
        </div>
      )}
    </div>
  );
};

export default App;
