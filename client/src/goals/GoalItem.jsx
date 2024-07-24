import React from 'react';
import PropTypes from 'prop-types';
import styles from './GoalItem.module.css';

const GoalItem = ({ goal, onEdit, onDelete }) => {
  return (
    <div className={styles.goalItem}>
      <div className={styles.details}>
        <h3 className={styles.title}>{goal.title}</h3>
        <p className={styles.description}>{goal.description}</p>
        <p className={styles.date}>Target Date: {new Date(goal.targetDate).toLocaleDateString()}</p>
        <p className={styles.amount}>Amount: ${goal.amount}</p>
        <p className={styles.category}>Category: {goal.category}</p>
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
  );
};

GoalItem.propTypes = {
  goal: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    targetDate: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default GoalItem;
