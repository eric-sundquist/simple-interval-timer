import React from 'react';

const Controls = ({ onStart, onPause, onReset }) => {
  return (
    <div className="controls">
      <button onClick={onStart} className="start-btn">
        Start
      </button>
      <button onClick={onPause} className="pause-btn">
        Pause
      </button>
      <button onClick={onReset} className="reset-btn">
        Reset
      </button>
    </div>
  );
};

export default Controls;
