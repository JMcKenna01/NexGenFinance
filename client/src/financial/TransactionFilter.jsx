import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './TransactionFilter.module.css';

const categories = [
  'Income', 'Expenses', 'Investments', 'Savings', 'Debt Payments'
];

const TransactionFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    description: '',
    startDate: null,
    endDate: null,
    minAmount: '',
    maxAmount: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const handleDateChange = (name, date) => {
    setFilters({
      ...filters,
      [name]: date
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  const handleReset = () => {
    setFilters({
      description: '',
      startDate: null,
      endDate: null,
      minAmount: '',
      maxAmount: '',
      category: ''
    });
    onFilter({});
  };

  return (
    <form className={styles.transactionFilter} onSubmit={handleSubmit}>
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        value={filters.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <label htmlFor="startDate">Start Date</label>
      <DatePicker
        selected={filters.startDate}
        onChange={(date) => handleDateChange('startDate', date)}
        dateFormat="MM/dd/yyyy"
        placeholderText="Start Date"
      />
      <label htmlFor="endDate">End Date</label>
      <DatePicker
        selected={filters.endDate}
        onChange={(date) => handleDateChange('endDate', date)}
        dateFormat="MM/dd/yyyy"
        placeholderText="End Date"
      />
      <label htmlFor="minAmount">Min Amount</label>
      <input
        type="number"
        id="minAmount"
        name="minAmount"
        value={filters.minAmount}
        onChange={handleChange}
        placeholder="Min Amount"
      />
      <label htmlFor="maxAmount">Max Amount</label>
      <input
        type="number"
        id="maxAmount"
        name="maxAmount"
        value={filters.maxAmount}
        onChange={handleChange}
        placeholder="Max Amount"
      />
      <label htmlFor="category">Category</label>
      <select id="category" name="category" value={filters.category} onChange={handleChange}>
        <option value="">Select Category</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <div>
        <button type="submit" className={styles.filterButton}>Filter</button>
        <button type="button" className={styles.resetButton} onClick={handleReset}>Reset</button>
      </div>
    </form>
  );
};

export default TransactionFilter;
