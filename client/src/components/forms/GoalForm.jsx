import React, { useState } from 'react';
import styles from './GoalForm.module.css';

const GoalForm = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Major Purchase');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !targetDate || !amount || !category) {
      alert('Please fill in all fields.');
      return;
    }
    onSave({ title, description, targetDate, amount, category });
    setTitle('');
    setDescription('');
    setTargetDate('');
    setAmount('');
    setCategory('Major Purchase');
  };

  return (
    <div className={styles.goalFormContainer}>
      <form className={styles.goalForm} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Goals Manager</h1>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="targetDate">Target Date</label>
          <input
            type="date"
            id="targetDate"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Major Purchase">Major Purchase</option>
            <option value="Travel">Travel</option>
            <option value="Education">Education</option>
            <option value="Emergency Fund">Emergency Fund</option>
            <option value="Retirement">Retirement</option>
            <option value="Debt Repayment">Debt Repayment</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit" className={styles.saveButton}>
          Add Goal
        </button>
      </form>
    </div>
  );
};

export default GoalForm;
