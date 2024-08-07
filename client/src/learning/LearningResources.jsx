import React from 'react';
import ResourceList from './ResourceList';
import styles from './LearningResources.module.css';

const LearningResources = () => {
  const resources = [
    {
      id: 1,
      title: 'Investopedia',
      description: 'A comprehensive resource for investing education.',
      url: 'https://www.investopedia.com/',
    },
    {
      id: 2,
      title: 'Khan Academy',
      description: 'Free courses on personal finance and investing.',
      url: 'https://www.khanacademy.org/',
    },
    {
      id: 3,
      title: 'Coursera - Financial Markets',
      description: 'A course on financial markets by Yale University.',
      url: 'https://www.coursera.org/learn/financial-markets-global',
    },
    {
      id: 4,
      title: 'Udemy - Personal Finance',
      description: 'Personal finance courses on Udemy.',
      url: 'https://www.udemy.com/topic/personal-finance/',
    },
    {
      id: 5,
      title: 'Financial Times',
      description: 'Latest news and analysis on financial markets.',
      url: 'https://www.ft.com/',
    },
  ];

  return (
    <div className={styles.learningResources}>
      <h1 className={styles.title}>Learning Resources</h1>
      <ResourceList resources={resources} />
    </div>
  );
};

export default LearningResources;
