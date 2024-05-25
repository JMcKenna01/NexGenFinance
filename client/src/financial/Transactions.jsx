import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionItem.module.css';

const TransactionItem = ({ transaction, onEdit, onDelete }) => {
  return (
    <div className={styles.transactionItem}>
      <div className={styles.details}>
        <h3 className={styles.description}>{transaction.description}</h3>
        <p className={styles.amount}>${transaction.amount.toFixed(2)}</p>
        <p className={styles.date}>Date: {transaction.date}</p>
      </div>
      <div className={styles.actions}>
        <button onClick={() => onEdit(transaction)} className={styles.editButton}>
          Edit
        </button>
        <button onClick={() => onDelete(transaction.id)} className={styles.deleteButton}>
          Delete
        </button>
      </div>
    </div>
  );
};

TransactionItem.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TransactionItem;
