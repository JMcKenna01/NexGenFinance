import React from 'react';
import PropTypes from 'prop-types';
import BudgetItem from './BudgetItem';
import styles from './BudgetList.module.css';

const BudgetList = ({ budgetItems, onEdit, onDelete }) => {
  return (
    <div className={styles.budgetList}>
      {budgetItems.length === 0 ? (
        <p>No budget items available.</p>
      ) : (
        budgetItems.map((item) => (
          <BudgetItem
            key={item.id}
            item={item}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

BudgetList.propTypes = {
  budgetItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BudgetList;
