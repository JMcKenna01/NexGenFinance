import React from 'react';
import PropTypes from 'prop-types';
import styles from './BudgetItem.module.css';

const BudgetItem = ({ item, onEdit, onDelete }) => {
  return (
    <div className={styles.budgetItem}>
      <div className={styles.details}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.amount}>${item.amount.toFixed(2)}</p>
        <p className={styles.category}>{item.category}</p>
      </div>
      <div className={styles.actions}>
        <button onClick={() => onEdit(item)} className={styles.editButton}>
          Edit
        </button>
        <button onClick={() => onDelete(item.id)} className={styles.deleteButton}>
          Delete
        </button>
      </div>
    </div>
  );
};

BudgetItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BudgetItem;
