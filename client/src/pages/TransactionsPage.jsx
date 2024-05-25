import React, { useState } from 'react';
import Transactions from '../components/transactions/Transactions';
import TransactionFilter from '../components/transactions/TransactionFilter';
import styles from './TransactionsPage.module.css';

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([
    { id: '1', description: 'Groceries', amount: 50.0, date: '2024-01-10' },
    { id: '2', description: 'Rent', amount: 1200.0, date: '2024-01-01' },
    // Add more transactions here
  ]);

  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const handleFilter = (filters) => {
    const filtered = transactions.filter((transaction) => {
      const matchDescription = !filters.description || transaction.description.toLowerCase().includes(filters.description.toLowerCase());
      const matchStartDate = !filters.startDate || new Date(transaction.date) >= new Date(filters.startDate);
      const matchEndDate = !filters.endDate || new Date(transaction.date) <= new Date(filters.endDate);
      const matchMinAmount = !filters.minAmount || transaction.amount >= parseFloat(filters.minAmount);
      const matchMaxAmount = !filters.maxAmount || transaction.amount <= parseFloat(filters.maxAmount);
      return matchDescription && matchStartDate && matchEndDate && matchMinAmount && matchMaxAmount;
    });
    setFilteredTransactions(filtered);
  };

  return (
    <div className={styles.transactionPage}>
      <h1>Transactions</h1>
      <TransactionFilter onFilter={handleFilter} />
      <Transactions transactions={filteredTransactions} />
    </div>
  );
};

export default TransactionsPage;
