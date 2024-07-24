import React from 'react';
import PropTypes from 'prop-types';
import styles from './InvestmentItem.module.css';

const InvestmentItem = ({ investment, onEdit, onDelete }) => {
  return (
    <div className={styles.investmentItem}>
      <div className={styles.details}>
        <h3 className={styles.title}>{investment.name}</h3>
        <p className={styles.type}>Type: {investment.type}</p>
        <p className={styles.amount}>Amount: ${investment.amount}</p>
        <p className={styles.date}>Date: {new Date(investment.date).toLocaleDateString()}</p>
      </div>
      <div className={styles.actions}>
        <button onClick={() => onEdit(investment)} className={styles.editButton}>
          Edit
        </button>
        <button onClick={() => onDelete(investment.id)} className={styles.deleteButton}>
          Delete
        </button>
      </div>
    </div>
  );
};

InvestmentItem.propTypes = {
  investment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default InvestmentItem;
