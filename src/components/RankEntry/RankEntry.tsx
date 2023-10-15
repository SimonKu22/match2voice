import React from 'react';
import './RankEntry.scss';

type RankEntryProps = {
    rank: number;
    name: string;
    score: number;
};

export const RankEntry: React.FC<RankEntryProps> = ({ rank, name, score }) => {
    return (
        <div className="rank-entry">
            <span>{rank} {name}: {score}</span>
        </div>
    );
}