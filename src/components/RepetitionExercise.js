import React, { useState } from 'react';

const RepetitionExercise = ({ name, suggestedExercise, onNavigate, onHome, onBack }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);

  return (
    <div className="exercise-container">
      <h2>{name}</h2>
      <p>Repetitions: {count}</p>

      <div>
        <button className="home" onClick={onHome}>Home</button>
        <button className="suggested" onClick={() => onNavigate(suggestedExercise)}>Suggested: {suggestedExercise}</button>
      </div>

      <div>
        <button onClick={increment}>Add Rep</button>
        <button onClick={reset}>Reset</button>
      </div>

      <button onClick={onBack}>Go Back</button>
    </div>
  );
};

export default RepetitionExercise;
