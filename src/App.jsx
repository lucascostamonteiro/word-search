import { useState } from 'react'
import WordGrid from './components/WordGrid/wordGrid';
import WordList from './components/WordList/wordList';
import wordListData from "../src/data/words.json";

import './App.css'

const App = () => {
  const gridSize = 10;

  return (
    <div className="main-container">
      <div className="app-header">
        <h1>Cross-Worlds</h1>
        <p>Find the words in the grid!</p>
      </div>
      <div className="app-container">
        <WordList words={wordListData.words} category={wordListData.category} />
        <WordGrid gridSize={gridSize} />
      </div>
    </div>
  );
}

export default App;
