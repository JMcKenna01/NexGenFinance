import React from 'react';
import PropTypes from 'prop-types';
import GoalItem from './GoalItem';
import styles from './GoalList.module.css';

const GoalList = ({ goals, onEdit, onDelete }) => {
  return (
    <div className={styles.goalList}>
      {goals.length === 0 ? (
        <p>No goals available.</p>
      ) : (
        goals.map((goal) => (
          <GoalItem
            key={goal.id}
            goal={goal}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

GoalList.propTypes = {
  goals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      targetAmount: PropTypes.number.isRequired,
      deadline: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default GoalList;
