import React from 'react';
import PropTypes from 'prop-types';
import styles from './AccountItem.module.css';

const AccountItem = ({ account, onEdit, onDelete }) => {
  return (
    <div className={styles.accountItem}>
      <div className={styles.details}>
        <h3 className={styles.title}>{account.name}</h3>
        <p className={styles.balance}>Balance: ${account.balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
        <p className={styles.type}>Type: {account.type}</p>
      </div>
      <div className={styles.actions}>
        <button onClick={() => onEdit(account)} className={styles.editButton}>
          Edit
        </button>
        <button onClick={() => onDelete(account.id)} className={styles.deleteButton}>
          Delete
        </button>
      </div>
    </div>
  );
};

AccountItem.propTypes = {
  account: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default AccountItem;
