"use client";

import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h2>Dashboard</h2>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/metrics">Metrics</Link></li>
        <li><Link href="/charts">Charts</Link></li>
        <li><Link href="/leaderboard">Leaderboard</Link></li>
      </ul>
    </div>
  );
}
