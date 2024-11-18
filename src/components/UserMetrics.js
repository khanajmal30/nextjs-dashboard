"use client";

import { useEffect, useState } from 'react';
import { userMetricsData } from '../data/mockData';
import Card from './Card';
import styles from '../styles/UserMetrics.module.css';

export default function UserMetrics() {
  const [data, setData] = useState(userMetricsData);

  useEffect(() => {
    setData(userMetricsData);
  }, []);

  return (
    <Card>
      <div className={styles.metrics}>
        <div className={styles.metric}>
          <h3>Active Users</h3>
          <p>{data.activeUsers}/80</p>
        </div>
        <div className={styles.metric}>
          <h3>Questions Answered</h3>
          <p>{data.questionsAnswered}</p>
        </div>
        <div className={styles.metric}>
          <h3>Av. Session Length</h3>
          <p>{data.sessionLength}</p>
        </div>
      </div>
    </Card>
  );
}
