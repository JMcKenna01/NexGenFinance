import React, { useState } from 'react';
import GoalForm from './GoalForm';
import GoalList from './GoalList';
import styles from './GoalsManager.module.css';

const GoalsManager = () => {
  const [goals, setGoals] = useState([
    { id: '1', name: 'Emergency Fund', targetAmount: 1000, deadline: '2024-12-31' },
    { id: '2', name: 'Vacation', targetAmount: 3000, deadline: '2024-06-30' },
  ]);

  const handleSave = (newGoal) => {
    setGoals([...goals, { ...newGoal, id: Date.now().toString() }]);
  };

  const handleEdit = (updatedGoal) => {
    setGoals(
      goals.map((goal) =>
        goal.id === updatedGoal.id ? updatedGoal : goal
      )
    );
  };

  const handleDelete = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  return (
    <div className={styles.goalsManager}>
      <h1>Goals Manager</h1>
      <GoalForm onSave={handleSave} />
      <GoalList
        goals={goals}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default GoalsManager;
