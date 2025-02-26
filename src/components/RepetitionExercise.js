import React, { useState } from 'react';

const RepetitionExercise = ({ name }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h2>{name}</h2>
      <p>Repetitions: {count}</p>
      <button onClick={increment}>Add Rep</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default RepetitionExercise;
