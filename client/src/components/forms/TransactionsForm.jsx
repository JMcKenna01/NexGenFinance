import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionForm.module.css';

const TransactionForm = ({ onSave, transaction }) => {
  const [formState, setFormState] = useState({
    description: transaction ? transaction.description : '',
    amount: transaction ? transaction.amount : '',
    date: transaction ? transaction.date : '',
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
    setFormState({ description: '', amount: '', date: '' });
  };

  return (
    <div className={styles.transactionFormContainer}>
      <form className={styles.transactionForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formState.description}
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
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formState.date}
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

TransactionForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  transaction: PropTypes.shape({
    description: PropTypes.string,
    amount: PropTypes.number,
    date: PropTypes.string,
  }),
};

export default TransactionForm;
