import React, { useState, useEffect, useContext } from 'react';
import BudgetForm from '../components/forms/BudgetForm';
import BudgetList from '../budget/BudgetList';
import { QueriesContext } from '../utils/QueriesContext';
import styles from './BudgetManager.module.css';

const BudgetManager = () => {
  const { mutations } = useContext(QueriesContext);
  const [budgetItems, setBudgetItems] = useState([
    { id: '1', name: 'Groceries', amount: 150.0, category: 'Food' },
    { id: '2', name: 'House Bills', amount: 1200.0, category: 'Housing' },
  ]);
  const [currentItem, setCurrentItem] = useState(null);
  const [totalBudget, setTotalBudget] = useState('');

  useEffect(() => {
    const savedTotalBudget = localStorage.getItem('totalBudget');
    if (savedTotalBudget) {
      setTotalBudget(savedTotalBudget);
    }
  }, []);

  const handleSave = (newItem) => {
    if (currentItem) {
      setBudgetItems(
        budgetItems.map((item) =>
          item.id === currentItem.id ? { ...newItem, id: currentItem.id } : item
        )
      );
    } else {
      setBudgetItems([...budgetItems, { ...newItem, id: Date.now().toString() }]);
    }
    setCurrentItem(null);
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
  };

  const handleDelete = (id) => {
    setBudgetItems(budgetItems.filter((item) => item.id !== id));
  };

  const handleTotalBudgetChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    setTotalBudget(value);
    localStorage.setItem('totalBudget', value);
  };

  const totalAmount = budgetItems.reduce((total, item) => total + item.amount, 0);
  const totalRemaining = totalBudget ? totalBudget - totalAmount : 0;

  const groupedItems = budgetItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className={styles.budgetManager}>
      <h1>Budget Manager</h1>
      <div className={styles.totalBudget}>
        <label>Total Budget: </label>
        <div className={styles.budgetInputWrapper}>
          <span className={styles.dollarSign}>$</span>
          <input
            type="text"
            value={totalBudget}
            onChange={handleTotalBudgetChange}
            placeholder=""
          />
        </div>
        <p className={styles.remaining}>
          Remaining: ${totalRemaining.toFixed(2)}
        </p>
        {totalRemaining < 0 && (
          <div className={styles.warningBar}>Warning: Over Budget!</div>
        )}
      </div>
      <BudgetForm onSave={handleSave} budgetItem={currentItem} />
      <div className={styles.categoryGroups}>
        {Object.keys(groupedItems).map((category) => (
          <div key={category} className={styles.categoryGroup}>
            <h2>{category}</h2>
            <div className={styles.budgetItems}>
              <BudgetList
                budgetItems={groupedItems[category]}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.totalBoxWrapper}>
        <div className={styles.totalBox}>
          <h2>Total Expenses</h2>
          <p>${totalAmount.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default BudgetManager;
