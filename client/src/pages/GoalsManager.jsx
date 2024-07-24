import React, { useState } from 'react';
import GoalForm from '../components/forms/GoalForm';
import GoalList from '../goals/GoalList';
import styles from './GoalsManager.module.css';

const GoalsManager = () => {
  const [goals, setGoals] = useState([]);

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  return (
    <div className={styles.goalsManagerContainer}>
      <div className={styles.quotes}>
        <RotatingQuotes />
      </div>
      <GoalForm onSave={addGoal} />
      <GoalList goals={goals} />
    </div>
  );
};

const RotatingQuotes = () => {
  const quotes = [
    "Set your goals high, and don't stop till you get there. - Bo Jackson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "The best way to predict your future is to create it. - Peter Drucker",
    "Believe you can and you're halfway there. - Theodore Roosevelt"
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [quotes.length]);

  return <p className={styles.motivationalQuotes}>{quotes[currentQuoteIndex]}</p>;
};

export default GoalsManager;
