"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { CategoryScale } from 'chart.js';
import { Chart, registerables } from 'chart.js';
import styles from '../styles/ActivityChart.module.css';

Chart.register(...registerables);
Chart.register(CategoryScale);

const Bar = dynamic(() => import('react-chartjs-2').then(module => module.Bar), { ssr: false });

export default function ActivityChart() {
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const chartData = {
      labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [
        {
          label: 'Activity',
          data: [100, 200, 150, 300, 250, 400, 300, 500, 450, 600, 550, 700],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
    setData(chartData);
  }, []);

  return <div className={styles.chart}><Bar data={data} /></div>;
}
