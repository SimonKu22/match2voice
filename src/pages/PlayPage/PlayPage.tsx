import React, { useState, useEffect } from 'react';
import ScoreDisplay from '../../components/ScoreDisplay/ScoreDisplay';
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';
import CelebrityChoice from '../../components/CelebrityChoice/CelebrityChoice';
import PlayAgain from '../../components/PlayAgain/PlayAgain';
import './PlayPage.scss';

interface Celebrity {
  id: number;
  celebrity: string;
  picture: string;
}

const PlayPage: React.FC = () => {
  const [score, setScore] = useState(0);
  const [audioClip, setAudioClip] = useState<string | null>(null);
  const [celebrities, setCelebrities] = useState<Celebrity[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [correctChoiceId, setCorrectChoiceId] = useState<number | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/voices/random');
      const data = await response.json();
      setAudioClip(data.audio);
      setCelebrities(data.celebrities);
      setCorrectChoiceId(data.correctChoiceId);
    } catch (error) {
      console.error('Error fetching voice data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCelebrityChoice = (chosenId: number) => {
    if (chosenId === correctChoiceId) {
      setScore((prevScore) => prevScore + 1);
      fetchData();
    } else {
      setIsGameOver(true);
    }
  };

  const restartGame = async () => {
    setIsGameOver(false);
    setScore(0);
    try {
      const response = await fetch('http://localhost:8080/voices/random');
      const data = await response.json();
      setAudioClip(data.audio);
      setCelebrities(data.celebrities);
      setCorrectChoiceId(data.correctChoiceId);
    } catch (error) {
      console.error('Error fetching voice data on restart:', error);
    }
  };

  return (
    <div className="play-page">
      <ScoreDisplay score={score} />
      <AudioPlayer audioClip={audioClip} />
      <div className="celebrities-container">
        {celebrities.map(celebrity => (
          <CelebrityChoice 
            key={celebrity.id}
            celebrity={celebrity}
            onChoice={handleCelebrityChoice}
            isGameOver={isGameOver}
            correctChoiceId={correctChoiceId}
          />
        ))}
      </div>
      {isGameOver && <PlayAgain onRestart={restartGame} score={score} />}
    </div>
  );
}

export default PlayPage;