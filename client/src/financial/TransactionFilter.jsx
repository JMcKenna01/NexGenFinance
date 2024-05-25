import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionFilter.module.css';

const TransactionFilter = ({ onFilter }) => {
  const [filterState, setFilterState] = useState({
    description: '',
    startDate: '',
    endDate: '',
    minAmount: '',
    maxAmount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterState({
      ...filterState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filterState);
  };

  const handleReset = () => {
    setFilterState({
      description: '',
      startDate: '',
      endDate: '',
      minAmount: '',
      maxAmount: '',
    });
    onFilter({});
  };

  return (
    <div className={styles.transactionFilterContainer}>
      <form className={styles.transactionFilter} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={filterState.description}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={filterState.startDate}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={filterState.endDate}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="minAmount">Min Amount</label>
          <input
            type="number"
            id="minAmount"
            name="minAmount"
            value={filterState.minAmount}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="maxAmount">Max Amount</label>
          <input
            type="number"
            id="maxAmount"
            name="maxAmount"
            value={filterState.maxAmount}
            onChange={handleChange}
          />
        </div>
        <div className={styles.buttons}>
          <button type="submit" className={styles.filterButton}>
            Filter
          </button>
          <button type="button" className={styles.resetButton} onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

TransactionFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default TransactionFilter;
