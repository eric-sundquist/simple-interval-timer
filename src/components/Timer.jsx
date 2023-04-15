// src/components/Timer.jsx
import React from 'react';

const Timer = ({ seconds }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="timer">
      <h2>{formatTime(seconds)}</h2>
    </div>
  );
};

export default Timer;
