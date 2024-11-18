"use client";

import { useEffect, useState } from 'react';
import styles from '../styles/Topics.module.css';

export default function Topics({ title, initialData }) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  return (
    <div className={styles.topics}>
      <h3>{title}</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index} className={styles.topic}>
            {item.topic}: <span>{item.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
