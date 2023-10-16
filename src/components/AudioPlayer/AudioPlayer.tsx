import React from "react";

interface Props {
  audioClip: string | null;
}

const AudioPlayer: React.FC<Props> = ({ audioClip }) => {
  return (
    <div className="audio-player">
      {audioClip && (
        <audio
          controls
          src={`http://localhost:8080/audio_files/${audioClip}`}
        ></audio>
      )}
    </div>
  );
};

export default AudioPlayer;
