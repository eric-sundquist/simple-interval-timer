// src/components/IntervalSettings.jsx
import React from 'react';

const IntervalSettings = ({ work, shortBreak, longBreak, onUpdate }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    onUpdate({
      ...{
        work: { duration: work.duration },
        shortBreak: { duration: shortBreak.duration },
        longBreak: { duration: longBreak.duration },
      },
      [name]: { duration: parseInt(value) },
    });
  };

  return (
    <div className="interval-settings">
      <div className="setting">
        <label htmlFor="work">Work Duration:</label>
        <input
          type="number"
          id="work"
          name="work"
          value={work.duration}
          onChange={handleChange}
          min="1"
        />
        <span>min</span>
      </div>

      <div className="setting">
        <label htmlFor="shortBreak">Short Break Duration:</label>
        <input
          type="number"
          id="shortBreak"
          name="shortBreak"
          value={shortBreak.duration}
          onChange={handleChange}
          min="1"
        />
        <span>min</span>
      </div>

      <div className="setting">
        <label htmlFor="longBreak">Long Break Duration:</label>
        <input
          type="number"
          id="longBreak"
          name="longBreak"
          value={longBreak.duration}
          onChange={handleChange}
          min="1"
        />
        <span>min</span>
      </div>
    </div>
  );
};

export default IntervalSettings;
