import React, { useState } from 'react';
import styles from './AccountForm.module.css';

const AccountForm = ({ onSave }) => {
  const [name, setName] = useState('');
  const [balance, setBalance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !balance) {
      alert('Please fill in all fields.');
      return;
    }
    onSave({ name, balance: parseFloat(balance) });
    setName('');
    setBalance('');
  };

  return (
    <form className={styles.accountForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Account Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter account name"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="balance">Balance</label>
        <input
          type="number"
          id="balance"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
          placeholder="Enter balance"
        />
      </div>
      <button type="submit" className={styles.saveButton}>
        Add Account
      </button>
    </form>
  );
};

export default AccountForm;
