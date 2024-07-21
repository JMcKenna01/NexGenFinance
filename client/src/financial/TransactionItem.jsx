import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionItem.module.css';

const TransactionItem = ({ transaction, onEdit, onDelete }) => {
  return (
    <div className={styles.transactionItem}>
      <p>{transaction.description}</p>
      <p>{transaction.date}</p>
      <p>${transaction.amount}</p>
      <p>{transaction.category}</p>
      <button onClick={() => onEdit(transaction)} className={styles.editButton}>Edit</button>
      <button onClick={() => onDelete(transaction.id)} className={styles.deleteButton}>Delete</button>
    </div>
  );
};

TransactionItem.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TransactionItem;
