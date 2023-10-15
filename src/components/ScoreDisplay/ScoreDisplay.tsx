import React, { useEffect, useState } from 'react';
import './ScoreDisplay.scss';

interface Props {
  score: number;
}

const ScoreDisplay: React.FC<Props> = ({ score }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (score > 0) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 300);
    }
  }, [score]);

  return (
    <div className="score-display__wrapper">
      <p className='score-display'>
        <span className={`score-display__number ${animate ? 'animate' : ''}`}>{score}</span>
      </p>
    </div>
  );
}

export default ScoreDisplay;