import React, { useState } from 'react';
import BudgetForm from '../components/forms/BudgetForm';
import BudgetList from '../budget/BudgetList';
import styles from './BudgetManager.module.css';

const BudgetManager = () => {
  const [budgetItems, setBudgetItems] = useState([
    { id: '1', name: 'Groceries', amount: 150.0, category: 'Food' },
    { id: '2', name: 'Rent', amount: 1200.0, category: 'Housing' },
    { id: '3', name: 'Gas', amount: 200.0, category: 'Housing' },
    { id: '4', name: 'Oil', amount: 800.0, category: 'Housing' },
  ]);

  const [currentItem, setCurrentItem] = useState(null);

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
    setCurrentItem(null); // Clear the form after saving
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
  };

  const handleDelete = (id) => {
    setBudgetItems(budgetItems.filter((item) => item.id !== id));
  };

  const totalAmount = budgetItems.reduce((total, item) => total + item.amount, 0);

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
        <div className={styles.totalBox}>
          <h2>Total</h2>
          <p>${totalAmount.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default BudgetManager;
