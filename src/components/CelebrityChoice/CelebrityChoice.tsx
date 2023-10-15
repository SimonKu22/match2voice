import React from "react";
import "./CelebrityChoice.scss"; 

interface Celebrity {
  id: number;
  celebrity: string;
  picture: string;
}

interface Props {
  celebrity: Celebrity;
  onChoice: (chosenId: number) => void;
  isGameOver: boolean;
  correctChoiceId: number | null;
}

const CelebrityChoice: React.FC<Props> = ({
  celebrity,
  onChoice,
  isGameOver,
  correctChoiceId,
}) => {
  const handleClick = () => {
    if (isGameOver) return;
    onChoice(celebrity.id);
  };

  return (
    <div
      className={`celebrity-choice ${
        isGameOver && celebrity.id === correctChoiceId ? "celebrity-choice--correct" : ""
      }`}
    >
      <img
        src={`http://localhost:8080/celebrity_images/${celebrity.picture}`}
        alt={celebrity.celebrity}
        onClick={handleClick}
        className="celebrity-choice__image"
      />
      <p className="celebrity-choice__name">{celebrity.celebrity}</p>
    </div>
  );
};

export default CelebrityChoice;