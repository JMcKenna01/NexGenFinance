import React from 'react';
import PropTypes from 'prop-types';
import styles from './GoalList.module.css';

const GoalList = ({ goals, onEdit, onDelete }) => {
  return (
    <div className={styles.goalList}>
      {goals.length === 0 ? (
        <p>No goals available.</p>
      ) : (
        goals.map((goal) => (
          <div key={goal.id} className={styles.goalItem}>
            <div className={styles.goalDetails}>
              <h3 className={styles.goalTitle}>{goal.title}</h3>
              <p className={styles.goalDescription}>{goal.description}</p>
              <p className={styles.goalDate}>Target Date: {new Date(goal.targetDate).toLocaleDateString()}</p>
              <p className={styles.goalAmount}>${goal.amount}</p>
              <p className={styles.goalCategory}>Category: {goal.category}</p>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: `${Math.min(100, (goal.amount / 10000) * 100)}%` }}></div>
              </div>
            </div>
            <div className={styles.actions}>
              <button onClick={() => onEdit(goal)} className={styles.editButton}>
                Edit
              </button>
              <button onClick={() => onDelete(goal.id)} className={styles.deleteButton}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

GoalList.propTypes = {
  goals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      targetDate: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default GoalList;
