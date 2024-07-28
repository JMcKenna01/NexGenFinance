import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { QueriesContext } from '../utils/QueriesContext';
import styles from './FinancialOverview.module.css';

const FinancialOverview = () => {
  const { budgetData } = useContext(QueriesContext);
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    // Load accounts from local storage
    const storedAccounts = localStorage.getItem('accounts');
    if (storedAccounts) {
      setAccounts(JSON.parse(storedAccounts));
    }

    // Fetch transactions data
    fetch('/api/transactions')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching transactions:', error));

    // Fetch investments data
    fetch('/api/investments')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => setInvestments(data))
      .catch(error => console.error('Error fetching investments:', error));
  }, []);

  const calculateTotalBalance = () => {
    return accounts.reduce((total, account) => total + account.balance, 0);
  };

  const calculateTotalSpent = () => {
    return budgetData.expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  const calculateTotalTransactions = () => {
    return transactions.reduce((total, transaction) => total + transaction.amount, 0);
  };

  const calculateTotalInvestments = () => {
    return investments.reduce((total, investment) => total + investment.amount, 0);
  };

  return (
    <div className={styles.financialOverview}>
      <h1>Financial Overview</h1>
      <div className={styles.summaryBox}>
        <h2>Accounts Summary</h2>
        <p>Total Balance: ${calculateTotalBalance().toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
        <Link to="/accounts" className={styles.viewDetailsButton}>View Details</Link>
      </div>
      <div className={styles.summaryBox}>
        <h2>Budgets Summary</h2>
        <p>Total Budget: ${budgetData.totalBudget.toFixed(2)}</p>
        <p>Total Spent: ${calculateTotalSpent().toFixed(2)}</p>
        <Link to="/budget" className={styles.viewDetailsButton}>View Details</Link>
      </div>
      <div className={styles.summaryBox}>
        <h2>Transactions Summary</h2>
        <p>Total Transactions: ${calculateTotalTransactions().toFixed(2)}</p>
        <Link to="/transactions" className={styles.viewDetailsButton}>View Details</Link>
      </div>
      <div className={styles.summaryBox}>
        <h2>Investments Summary</h2>
        <p>Total Investments: ${calculateTotalInvestments().toFixed(2)}</p>
        <Link to="/investments" className={styles.viewDetailsButton}>View Details</Link>
      </div>
    </div>
  );
};

export default FinancialOverview;
