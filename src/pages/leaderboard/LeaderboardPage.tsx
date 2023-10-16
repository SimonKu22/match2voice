import React, { useEffect, useState } from "react";
import axios from "axios";
import { RankEntry } from "../../components/RankEntry/RankEntry";
import "./LeaderboardPage.scss";

type LeaderboardEntry = {
  name: string;
  score: number;
  id: string;
};

export const LeaderboardPage: React.FC = () => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/display/leaderboard")
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        setEntries(
          response.data.sort(
            (a: LeaderboardEntry, b: LeaderboardEntry) => b.score - a.score
          )
        );
      })
      .catch((error) => {
        console.error("Axios error:", error);
      });
  }, []);

  return (
    <div className="leaderboard-page">
      <div className="entries-list">
        {entries.map((entry, index) => (
          <RankEntry
            key={entry.id}
            rank={index + 1}
            name={entry.name}
            score={entry.score}
          />
        ))}
      </div>
    </div>
  );
};
