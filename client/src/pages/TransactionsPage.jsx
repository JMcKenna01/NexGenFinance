import React, { useState } from 'react';
import TransactionsForm from '../components/forms/TransactionsForm';
import TransactionList from '../financial/TransactionList';
import styles from './TransactionsPage.module.css';

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);

  const handleSave = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now().toString() }]);
  };

  const handleFilter = (filters) => {
    // Implement your filtering logic here
  };

  const handleEdit = (transaction) => {
    // Implement your edit logic here
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <div className={styles.transactionsPage}>
      <h1>Transactions</h1>
      <TransactionsForm onSave={handleSave} />
      <TransactionList transactions={transactions} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default TransactionsPage;
