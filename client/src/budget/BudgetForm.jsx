import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './BudgetForm.module.css';

const BudgetForm = ({ onSave, budgetItem }) => {
  const [formState, setFormState] = useState({
    name: budgetItem ? budgetItem.name : '',
    amount: budgetItem ? budgetItem.amount : '',
    category: budgetItem ? budgetItem.category : '',
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
    setFormState({ name: '', amount: '', category: '' });
  };

  return (
    <div className={styles.budgetFormContainer}>
      <form className={styles.budgetForm} onSubmit={handleSubmit}>
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
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formState.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formState.category}
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

BudgetForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  budgetItem: PropTypes.object,
};

export default BudgetForm;
