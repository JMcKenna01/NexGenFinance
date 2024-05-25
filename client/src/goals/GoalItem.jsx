import React from 'react';
import PropTypes from 'prop-types';
import styles from './GoalItem.module.css';

const GoalItem = ({ goal, onEdit, onDelete }) => {
  return (
    <div className={styles.goalItem}>
      <div className={styles.details}>
        <h3 className={styles.name}>{goal.name}</h3>
        <p className={styles.targetAmount}>Target Amount: ${goal.targetAmount.toFixed(2)}</p>
        <p className={styles.deadline}>Deadline: {goal.deadline}</p>
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
    name: PropTypes.string.isRequired,
    targetAmount: PropTypes.number.isRequired,
    deadline: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default GoalItem;
