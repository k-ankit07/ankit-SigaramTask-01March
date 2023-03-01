import React, { useState } from 'react';

const ColorBoxGame = () => {
  const [redBoxes, setRedBoxes] = useState([]);

  const handleBoxClick = (index) => {
    let newRedBoxes = [...redBoxes];
    newRedBoxes.push(index);
    if (newRedBoxes.length > 2) {
      newRedBoxes.shift();
    }
    setRedBoxes(newRedBoxes);
  };

  const renderBoxes = () => {
    let boxes = [];
    for (let i = 0; i < 16; i++) {
      boxes.push(
        <div
          key={i}
          className={`box ${redBoxes.includes(i) ? 'red' : ''}`}
          onClick={() => handleBoxClick(i)}
        ></div>
      );
    }
    return boxes;
  };

  return (
    <div>
      <h1>Color Box Game</h1>
      <p>Click on the boxes to turn them red, and toggle other boxes back to blue.</p>
      <div className="container">{renderBoxes()}</div>
    </div>
  );
};

export default ColorBoxGame;
