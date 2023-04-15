// src/App.jsx
import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';
import IntervalSettings from './components/IntervalSettings';
import Controls from './components/Controls';
import './App.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [intervals, setIntervals] = useState({
    work: { duration: 25 * 60 },
    shortBreak: { duration: 5 * 60 },
    longBreak: { duration: 15 * 60 },
  });

  const [currentInterval, setCurrentInterval] = useState('work');
  const [timerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(intervals[currentInterval].duration);
  const [flash, setFlash] = useState(false);


  const handleUpdate = (updatedIntervals) => {
    setIntervals(updatedIntervals);
    setTimeLeft(updatedIntervals[currentInterval].duration);
  };

  const handleStart = () => {
    setTimerActive(true);
  };

  const handlePause = () => {
    setTimerActive(false);
  };

  const handleReset = () => {
    setTimerActive(false);
    setTimeLeft(intervals[currentInterval].duration);
  };

  const handleTimerEnd = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 300);

    if (currentInterval === 'work') {
      setCurrentInterval('shortBreak');
    } else if (currentInterval === 'shortBreak') {
      setCurrentInterval('work');
    }
    // Add logic for long breaks if needed
    setTimeLeft(intervals[currentInterval].duration);
  };

  useEffect(() => {
    if (!timerActive) {
      return;
    }

    if (timeLeft === 0) {
      handleTimerEnd();
      return;
    }

    const timerId = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timerActive, timeLeft]);

  return (
    <div className={`App${flash ? ' flash' : ''}`}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Custom Timer</h1>
      <IntervalSettings {...intervals} onUpdate={handleUpdate} />
      <Timer seconds={timeLeft} />
      <Controls onStart={handleStart} onPause={handlePause} onReset={handleReset} />
    </div>
  );
}

export default App;
