import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./components/RunningExercise";

export const exercises = [
  { name: "Push-ups", type: "repetition", suggestedExercise: "Jump Rope" },
  { name: "Jump Rope", type: "duration", suggestedExercise: "Running" },
  { name: "Running", type: "duration", suggestedExercise: "Plank" },
  { name: "Plank", type: "repetition", suggestedExercise: "Push-ups" },
];

const App = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const navigateToExercise = (exerciseName) => {
    const exercise = exercises.find((ex) => ex.name === exerciseName);
    setSelectedExercise(exercise);
  };

  return (
    <div>
      <h1>Exercise Tracker</h1>

      {!selectedExercise && (
        <div>
          <h2>Select an Exercise:</h2>
          {exercises.map((exercise) => (
            <button key={exercise.name} onClick={() => navigateToExercise(exercise.name)}>
              {exercise.name}
            </button>
          ))}
        </div>
      )}

      {selectedExercise && (
        <div>
          {selectedExercise.type === "repetition" ? (
            <RepetitionExercise 
              name={selectedExercise.name}
              suggestedExercise={selectedExercise.suggestedExercise}
              onNavigate={navigateToExercise}
              onHome={() => setSelectedExercise(null)}
              onBack={() => setSelectedExercise(null)}
            />
          ) : selectedExercise.type === "running" ? (
            <RunningExercise 
              name={selectedExercise.name}
              suggestedExercise={selectedExercise.suggestedExercise}
              onNavigate={navigateToExercise}
              onHome={() => setSelectedExercise(null)}
              onBack={() => setSelectedExercise(null)}
            />
          ) : (
            <DurationExercise 
              name={selectedExercise.name}
              suggestedExercise={selectedExercise.suggestedExercise}
              onNavigate={navigateToExercise}
              onHome={() => setSelectedExercise(null)}
              onBack={() => setSelectedExercise(null)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
