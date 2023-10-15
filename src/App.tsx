import React, { useEffect } from 'react';
import './App.scss';
import Header from './components/header/header';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import PlayPage from './pages/PlayPage/PlayPage';
import {LeaderboardPage } from './pages/leaderboard/LeaderboardPage';

function RedirectToPlay() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/play');
  }, [navigate]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<RedirectToPlay />} />
          <Route path="/leaderboard" element={<LeaderboardPage></LeaderboardPage>} />
          <Route path="/play" element={<PlayPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
