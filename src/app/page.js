"use client";

import dynamic from 'next/dynamic';
import UserMetrics from '../components/UserMetrics';
import KnowledgeMetrics from '../components/KnowledgeMetrics';
import Topics from '../components/Topics';
import Leaderboard from '../components/Leaderboard';
import ErrorBoundary from '../components/ErrorBoundary';
import styles from '../styles/Home.module.css';

const ActivityChart = dynamic(() => import('../components/ActivityChart'), { ssr: false });

export default function Home() {
  const weakestTopicsData = [
    { topic: "Food Safety", score: "74% Correct" },
    { topic: "Compliance Basics Procedures", score: "52% Correct" },
    { topic: "Company Networking", score: "36% Correct" },
  ];

  const strongestTopicsData = [
    { topic: "Covid Protocols", score: "95% Correct" },
    { topic: "Cyber Security Basics", score: "92% Correct" },
    { topic: "Social Media Policies", score: "89% Correct" },
  ];

  const userLeaderboardData = [
    { name: "Jesse Thomas", points: 637, score: "98% Correct" },
    { name: "Thisal Mathiyazhagan", points: 637, score: "95% Correct" },
    { name: "Helen Chuang", points: 637, score: "88% Correct" },
    { name: "Lura Silverman", points: 637, score: "87% Correct" },
  ];

  const groupsLeaderboardData = [
    { name: "Houston Facility", points: 52, score: "97% Correct" },
    { name: "Test Group", points: 52, score: "95% Correct" },
    { name: "Sales Leadership", points: 52, score: "93% Correct" },
    { name: "Northeast Region", points: 52, score: "87% Correct" },
  ];

  return (
    <ErrorBoundary>
      <div className={styles.dashboard}>
        <div className={styles.filters}>
          <div className={styles.timeframe}>Timeframe: All-time</div>
          <div className={styles.people}>People: All</div>
          <div className={styles.topic}>Topic: All</div>
        </div>
        <UserMetrics />
        <KnowledgeMetrics />
        <ActivityChart />
        <div className={styles.topicsSection}>
          <Topics title="Weakest Topics" initialData={weakestTopicsData} />
          <Topics title="Strongest Topics" initialData={strongestTopicsData} />
        </div>
        <div className={styles.leaderboardsSection}>
          <Leaderboard title="User Leaderboard" initialData={userLeaderboardData} />
          <Leaderboard title="Groups Leaderboard" initialData={groupsLeaderboardData} />
        </div>
      </div>
    </ErrorBoundary>
  );
}
