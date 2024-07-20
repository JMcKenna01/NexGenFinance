import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './BudgetForm.module.css';

const BudgetForm = ({ onSave, budgetItem }) => {
  const [formState, setFormState] = useState({
    name: '',
    amount: '',
    category: '',
  });

  useEffect(() => {
    if (budgetItem) {
      setFormState({
        name: budgetItem.name,
        amount: budgetItem.amount.toString(),
        category: budgetItem.category,
      });
    } else {
      setFormState({ name: '', amount: '', category: '' });
    }
  }, [budgetItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: name === 'amount' ? value.replace(/^\$/, '') : value,
    });
  };

  const handleBlur = (e) => {
    if (e.target.name === 'amount') {
      setFormState({
        ...formState,
        amount: `$${formState.amount}`,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(formState.amount.replace(/^\$/, ''));
    if (!isNaN(amount)) {
      onSave({ ...formState, amount });
    }
    setFormState({ name: '', amount: '', category: '' });
  };

  return (
    <div className={styles.budgetFormContainer}>
      <form className={styles.budgetForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name of Expense</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Enter name of expense"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={formState.amount.startsWith('$') ? formState.amount : `$${formState.amount}`}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter amount"
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
            placeholder="Enter category"
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
