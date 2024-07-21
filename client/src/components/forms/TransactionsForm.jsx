import React, { useState } from 'react';
import styles from './TransactionsForm.module.css';

const TransactionsForm = ({ onSave }) => {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !date || !amount || !category) {
      alert('Please fill in all fields.');
      return;
    }
    onSave({ description, date, amount, category });
    setDescription('');
    setDate('');
    setAmount('');
    setCategory('');
  };

  return (
    <div className={styles.transactionFormContainer}>
      <form className={styles.transactionForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
            <option value="">Select Category</option>
            <optgroup label="Income">
              <option value="salary">Salary</option>
              <option value="business">Business Income</option>
              <option value="investment">Investment Income</option>
              <option value="others">Others</option>
            </optgroup>
            <optgroup label="Expenses">
              <option value="housing">Housing</option>
              <option value="food">Food</option>
              <option value="transportation">Transportation</option>
              <option value="entertainment">Entertainment</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="others">Others</option>
            </optgroup>
            <optgroup label="Investments">
              <option value="stocks">Stocks</option>
              <option value="bonds">Bonds</option>
              <option value="mutual_funds">Mutual Funds</option>
              <option value="crypto">Crypto</option>
              <option value="real_estate">Real Estate</option>
            </optgroup>
            <optgroup label="Savings">
              <option value="emergency_fund">Emergency Fund</option>
              <option value="retirement_fund">Retirement Fund</option>
              <option value="others">Others</option>
            </optgroup>
            <optgroup label="Debt Payments">
              <option value="credit_card">Credit Card Payments</option>
              <option value="loan">Loan Payments</option>
            </optgroup>
          </select>
        </div>
        <button type="submit" className={styles.saveButton}>
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionsForm;
