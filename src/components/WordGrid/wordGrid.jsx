import React from 'react';


const getRandomLetter = () => {
  const letters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z',
    'á', 'é', 'í', 'ó', 'ú', 'ç', 'ã', 'õ', 'â', 'ê', 'ô'
  ];
  let index = [Math.floor(Math.random() * letters.length)];
  return letters[index];

};


const WordGrid = ({ gridSize }) => {

  return (
    <div className="grid-container">
      <h2>Word Search Grid</h2>
      <div className="grid">
        {[...Array(gridSize * gridSize)].map((_, i) => (
          <div key={i} className="grid-cell">
            {getRandomLetter()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordGrid;