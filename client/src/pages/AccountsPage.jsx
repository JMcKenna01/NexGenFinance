import React, { useState, useEffect } from 'react';
import styles from './AccountsPage.module.css';
import AccountList from '../accounts/AccountList';

const AccountsPage = () => {
  const [accounts, setAccounts] = useState([]);
  const [name, setName] = useState('');
  const [balance, setBalance] = useState('');
  const [type, setType] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [filter, setFilter] = useState('All');

  // Load accounts from local storage when component mounts
  useEffect(() => {
    const storedAccounts = localStorage.getItem('accounts');
    if (storedAccounts) {
      setAccounts(JSON.parse(storedAccounts));
    }
  }, []);

  // Save accounts to local storage whenever accounts state changes
  useEffect(() => {
    localStorage.setItem('accounts', JSON.stringify(accounts));
  }, [accounts]);

  const handleBalanceChange = (e) => {
    const value = e.target.value;
    const formattedValue = value
      .replace(/[^0-9]/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setBalance('$' + formattedValue);
  };

  const handleAddAccount = () => {
    if (!name || !balance || !type) {
      alert('Please fill in all fields.');
      return;
    }
    const newAccount = { id: Date.now().toString(), name, balance: parseFloat(balance.replace('$', '').replace(/,/g, '')), type };
    if (editingIndex !== null) {
      const updatedAccounts = [...accounts];
      updatedAccounts[editingIndex] = newAccount;
      setAccounts(updatedAccounts);
      setEditingIndex(null);
    } else {
      setAccounts([...accounts, newAccount]);
    }
    setName('');
    setBalance('');
    setType('');
  };

  const handleEditAccount = (account) => {
    const index = accounts.findIndex(a => a.id === account.id);
    setName(account.name);
    setBalance('$' + account.balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    setType(account.type);
    setEditingIndex(index);
  };

  const handleDeleteAccount = (id) => {
    setAccounts(accounts.filter(account => account.id !== id));
  };

  const totalBalance = accounts.reduce((total, account) => total + account.balance, 0);

  const filteredAccounts = filter === 'All' ? accounts : accounts.filter(account => account.type === filter);

  return (
    <div className={styles.accountsPage}>
      <h1 className={styles.whiteText}>Accounts</h1>
      <div className={styles.accountOverview}>
        <h2 className={styles.whiteText}>Total Balance: ${totalBalance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h2>
      </div>
      <div className={styles.accountForm}>
        <h2 className={styles.whiteText}>{editingIndex !== null ? 'Edit Account' : 'Add New Account'}</h2>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.whiteText}>Account Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter account name"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="type" className={styles.whiteText}>Account Type</label>
          <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Select type</option>
            <option value="Savings">Savings</option>
            <option value="Checking">Checking</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Travel Fund">Travel Fund</option>
            <option value="Health Savings Account (HSA)">Health Savings Account (HSA)</option>
            <option value="Education Savings Account (ESA)">Education Savings Account (ESA)</option>
            <option value="Brokerage">Brokerage</option>
            <option value="Business Account">Business Account</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="balance" className={styles.whiteText}>Balance</label>
          <input
            type="text"
            id="balance"
            value={balance}
            onChange={handleBalanceChange}
            placeholder="Enter balance"
          />
        </div>
        <button onClick={handleAddAccount} className={styles.addButton}>
          {editingIndex !== null ? 'Update Account' : 'Add Account'}
        </button>
      </div>
      <div className={styles.filterContainer}>
        <label className={styles.whiteText}>Filter by Account Type: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Savings">Savings</option>
          <option value="Checking">Checking</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Travel Fund">Travel Fund</option>
          <option value="Health Savings Account (HSA)">Health Savings Account (HSA)</option>
          <option value="Education Savings Account (ESA)">Education Savings Account (ESA)</option>
          <option value="Brokerage">Brokerage</option>
          <option value="Business Account">Business Account</option>
        </select>
      </div>
      <div className={styles.accountList}>
        <h2 className={styles.whiteText}>Account List</h2>
        <AccountList accounts={filteredAccounts} onEdit={handleEditAccount} onDelete={handleDeleteAccount} />
      </div>
    </div>
  );
};

export default AccountsPage;
