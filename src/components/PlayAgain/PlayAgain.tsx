import React, { useState } from 'react';
import "./PlayAgain.scss"

interface Props {
  onRestart: () => void;
  score: number;
}

const PlayAgain: React.FC<Props> = ({ onRestart, score }) => {
  const [name, setName] = useState("");
  const [scoreSaved, setScoreSaved] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const saveScore = async () => {
    if (!name.trim()) {
      alert("Please enter a valid name!");
      return;
    }
    try {
      const response = await fetch('http://localhost:8080/savescore', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          score
        })
      });

      if (response.ok) {
        setScoreSaved(true);
      } else {
        console.error("Failed to save score");
      }
    } catch (error) {
      console.error("There was an error saving the score:", error);
    }
  }

  return (
    <div className="play-again">
      <p className="play-again__score-text">Your Score: {score}</p>
      
      {scoreSaved ? (
        <p className="play-again__saved-text">Score Saved!</p>
      ) : (
        <div className="play-again__input-wrapper">
          <input 
            type="text"
            className="play-again__input"
            placeholder="Enter your name" 
            value={name} 
            onChange={handleNameChange}
          />
          <button className="play-again__save-button" onClick={saveScore}>Save Score</button>
        </div>
      )}
      <button className="play-again__restart-button" onClick={onRestart}>Play Again</button>
    </div>
  );
}

export default PlayAgain;