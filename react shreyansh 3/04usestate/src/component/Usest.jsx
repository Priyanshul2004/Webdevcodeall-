import React from 'react';
import { useState } from 'react';

const Usest = () => {
  const [score, setScore] = useState(0);

  return (
    <div>
      <h1>Current score is {score}</h1>
      <button onClick={() => setScore(score + 1)} className='bg-red-400 px-3 py-3'>Increase</button>
      <button 
        onClick={() => {
          if (score > 0) {
            setScore(score - 1);
          }
        }} 
        className='bg-green-300 px-3 py-4'
      >
        Decrease
      </button>
    </div>
  );
}

export default Usest;


