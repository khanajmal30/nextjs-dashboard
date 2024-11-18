"use client";

import Leaderboard from '../../components/Leaderboard';

export default function LeaderboardPage() {
  const userLeaderboardData = [
    { name: "Jesse Thomas", points: 637, score: "98% Correct" },
    { name: "Thisal Mathiyazhagan", points: 637, score: "95% Correct" },
    { name: "Helen Chuang", points: 637, score: "88% Correct" },
    { name: "Lura Silverman", points: 637, score: "87% Correct" },
  ];

  return (
    <div>
      <h1>Leaderboard</h1>
      <Leaderboard title="User Leaderboard" initialData={userLeaderboardData} />
    </div>
  );
}
