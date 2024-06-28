import React, { useState } from 'react';
import BudgetForm from './BudgetForm';
import BudgetList from './BudgetList';
import styles from './BudgetManager.module.css';

const BudgetManager = () => {
  const [budgetItems, setBudgetItems] = useState([
    { id: '1', name: 'Groceries', amount: 150.0, category: 'Food' },
    { id: '2', name: 'Rent', amount: 1200.0, category: 'Housing' },
  ]);

  const handleSave = (newItem) => {
    setBudgetItems([...budgetItems, { ...newItem, id: Date.now().toString() }]);
  };

  const handleEdit = (updatedItem) => {
    setBudgetItems(
      budgetItems.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
  };

  const handleDelete = (id) => {
    setBudgetItems(budgetItems.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.budgetManager}>
      <h1>Budget Manager</h1>
      <BudgetForm onSave={handleSave} />
      <BudgetList
        budgetItems={budgetItems}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default BudgetManager;