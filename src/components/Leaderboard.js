"use client";

import { useEffect, useState } from 'react';
import styles from '../styles/Leaderboard.module.css';

export default function Leaderboard({ title, initialData }) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  return (
    <div className={styles.leaderboard}>
      <h3>{title}</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index} className={styles.item}>
            <span>{index + 1}. {item.name}</span>
            <span>{item.points} Points - {item.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
