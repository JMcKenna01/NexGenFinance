import React, { useState } from 'react';
import styles from './InvestmentForm.module.css';

const InvestmentForm = ({ onSave }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('$');
  const [date, setDate] = useState('');

  const formatAmountWithCommas = (value) => {
    const cleanedValue = value.replace(/,/g, '').replace('$', '');
    const numericValue = parseFloat(cleanedValue);
    if (isNaN(numericValue)) {
      return '$';
    }
    return '$' + numericValue.toLocaleString();
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || value === '$') {
      setAmount('$');
    } else if (!isNaN(value.replace(/[$,]/g, ''))) {
      setAmount(formatAmountWithCommas(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numericAmount = parseFloat(amount.replace(/[$,]/g, ''));
    if (!name || !type || isNaN(numericAmount) || !date) {
      alert('Please fill in all fields.');
      return;
    }
    onSave({ name, type, amount: numericAmount, date });
    setName('');
    setType('');
    setAmount('$');
    setDate('');
  };

  return (
    <div className={styles.investmentFormContainer}>
      <form className={styles.investmentForm} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Investment Manager</h1>
        <div className={styles.formGroup}>
          <label htmlFor="name">Investment Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter investment name"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="type">Investment Type</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Select type</option>
            <option value="Stocks">Stocks</option>
            <option value="Bonds">Bonds</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Mutual Funds">Mutual Funds</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="amount">Amount</label>
          <div className={styles.inputWithPrefix}>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount"
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={styles.dateInput}
          />
        </div>
        <button type="submit" className={styles.saveButton}>
          Add Investment
        </button>
      </form>
    </div>
  );
};

export default InvestmentForm;
