"use client";

import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h2>Dashboard</h2>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/metrics">Metrics</Link></li>
        <li><Link href="/charts">Charts</Link></li>
        <li><Link href="/leaderboard">Leaderboard</Link></li>
      </ul>
    </nav>
  );
}
