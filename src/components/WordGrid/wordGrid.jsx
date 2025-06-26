import React from 'react';


const WordGrid = ({ gridSize }) => {
  return (
    <div className="grid-container">
      <h2>Word Search Grid</h2>
      <div className="grid">
        {[...Array(gridSize * gridSize)].map((_, i) => (
          <div key={i} className="grid-cell">
            .
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordGrid;