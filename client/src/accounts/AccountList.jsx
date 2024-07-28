import React from 'react';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import styles from './AccountList.module.css';

const AccountList = ({ accounts, onEdit, onDelete }) => {
  return (
    <div className={styles.accountList}>
      {accounts.length === 0 ? (
        <p className={styles.noAccounts}>No accounts available.</p>
      ) : (
        accounts.map((account) => (
          <AccountItem
            key={account.id}
            account={account}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

AccountList.propTypes = {
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default AccountList;
