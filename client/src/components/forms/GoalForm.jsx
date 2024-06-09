import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './GoalForm.module.css';

const GoalForm = ({ onSave, goal }) => {
  const [formState, setFormState] = useState({
    name: goal ? goal.name : '',
    targetAmount: goal ? goal.targetAmount : '',
    deadline: goal ? goal.deadline : '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formState);
    setFormState({ name: '', targetAmount: '', deadline: '' });
  };

  return (
    <div className={styles.goalFormContainer}>
      <form className={styles.goalForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="targetAmount">Target Amount</label>
          <input
            type="number"
            id="targetAmount"
            name="targetAmount"
            value={formState.targetAmount}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="deadline">Deadline</label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formState.deadline}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.saveButton}>
          Save
        </button>
      </form>
    </div>
  );
};

GoalForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  goal: PropTypes.shape({
    name: PropTypes.string,
    targetAmount: PropTypes.number,
    deadline: PropTypes.string,
  }),
};

export default GoalForm;
