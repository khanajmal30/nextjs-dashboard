"use client";

import { useEffect, useState } from 'react';
import { knowledgeMetricsData } from '../data/mockData';
import Card from './Card';
import styles from '../styles/KnowledgeMetrics.module.css';

export default function KnowledgeMetrics() {
  const [data, setData] = useState(knowledgeMetricsData);

  useEffect(() => {
    setData(knowledgeMetricsData);
  }, []);[_{{{CITATION{{{_1{](https://github.com/HelKyle/antd-multi-cascader/tree/f7217a51ae8b86f3f7838e0d726bc90acd6394f2/docs%2Fvendors~main.f9a871f0.iframe.bundle.js)

# Create KnowledgeMetrics component
cat << 'EOF' > components/KnowledgeMetrics.js
"use client";

import { useEffect, useState } from 'react';
import { knowledgeMetricsData } from '../data/mockData';
import Card from './Card';
import styles from '../styles/KnowledgeMetrics.module.css';

export default function KnowledgeMetrics() {
  const [data, setData] = useState(knowledgeMetricsData);

  useEffect(() => {
    setData(knowledgeMetricsData);
  }, []);

  return (
    <Card>
      <div className={styles.metrics}>
        <div className={styles.metric}>
          <h3>Starting Knowledge</h3>
          <p>{data.startingKnowledge}</p>
        </div>
        <div className={styles.metric}>
          <h3>Current Knowledge</h3>
          <p>{data.currentKnowledge}</p>
        </div>
        <div className={styles.metric}>
          <h3>Knowledge Gain</h3>
          <p>{data.knowledgeGain}</p>
        </div>
      </div>
    </Card>
  );
}
