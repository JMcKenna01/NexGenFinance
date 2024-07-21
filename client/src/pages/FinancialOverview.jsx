import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './FinancialOverview.module.css';

const FinancialOverview = () => {
  const [accounts, setAccounts] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    // Fetch accounts data
    fetch('/api/accounts')
      .then(response => response.json())
      .then(data => setAccounts(data))
      .catch(error => console.error('Error fetching accounts:', error));

    // Fetch budgets data
    fetch('/api/budgets')
      .then(response => response.json())
      .then(data => setBudgets(data))
      .catch(error => console.error('Error fetching budgets:', error));

    // Fetch transactions data
    fetch('/api/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching transactions:', error));

    // Fetch investments data
    fetch('/api/investments')
      .then(response => response.json())
      .then(data => setInvestments(data))
      .catch(error => console.error('Error fetching investments:', error));
  }, []);

  const calculateTotalBalance = () => {
    return accounts.reduce((total, account) => total + account.balance, 0);
  };

  const calculateTotalBudget = () => {
    return budgets.reduce((total, budget) => total + budget.limit, 0);
  };

  const calculateTotalSpent = () => {
    return budgets.reduce((total, budget) => total + budget.currentSpend, 0);
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
        <p>Total Balance: ${calculateTotalBalance().toFixed(2)}</p>
        <Link to="/accounts" className={styles.viewDetailsButton}>View Details</Link>
      </div>
      <div className={styles.summaryBox}>
        <h2>Budgets Summary</h2>
        <p>Total Budget: ${calculateTotalBudget().toFixed(2)}</p>
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
