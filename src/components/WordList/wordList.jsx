// list of words will be imported here from a json file where the words are stored in categories
// we will randomly select a category and render the words in the grid
import React, { useState, useEffect } from 'react';



const WordList = ({ words, category }) => {
  return (
    <div className="app-container">
      <div className="word-list-container">
        <h2> {category}</h2>
        <ul className="word-list">
          {words.map((word, index) => (
            <li key={index} className="word-item">
              {word['word-en']}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};


export default WordList;