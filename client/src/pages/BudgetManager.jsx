import React, { useState, useEffect, useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend } from 'chart.js';
import BudgetForm from '../components/forms/BudgetForm';
import BudgetList from '../budget/BudgetList';
import { QueriesContext } from '../utils/QueriesContext';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import styles from './BudgetManager.module.css';

// Register the necessary components with ChartJS
ChartJS.register(ArcElement, ChartTooltip, Legend);

const BudgetManager = () => {
  const { budgetData, setBudgetData } = useContext(QueriesContext);
  const [currentItem, setCurrentItem] = useState(null);
  const [totalBudget, setTotalBudget] = useState(0); // Initial budget set to 0

  // Initial budget items
  useEffect(() => {
    const initialItems = [
      { id: '1', name: 'Groceries', amount: 150.0, category: 'Food' },
      { id: '2', name: 'House Bills', amount: 1200.0, category: 'Housing' },
      { id: '3', name: 'Transportation', amount: 300.0, category: 'Transport' },
    ];
    if (budgetData.expenses.length === 0) {
      setBudgetData({ ...budgetData, expenses: initialItems });
    }
  }, [budgetData, setBudgetData]);

  useEffect(() => {
    const savedTotalBudget = localStorage.getItem('totalBudget');
    if (savedTotalBudget) {
      setTotalBudget(savedTotalBudget);
    }
  }, []);

  const handleSave = (newItem) => {
    if (currentItem) {
      setBudgetData({
        ...budgetData,
        expenses: budgetData.expenses.map((item) =>
          item.id === currentItem.id ? { ...newItem, id: currentItem.id } : item
        ),
      });
    } else {
      setBudgetData({
        ...budgetData,
        expenses: [...budgetData.expenses, { ...newItem, id: Date.now().toString() }],
      });
    }
    setCurrentItem(null);
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
  };

  const handleDelete = (id) => {
    setBudgetData({
      ...budgetData,
      expenses: budgetData.expenses.filter((item) => item.id !== id),
    });
  };

  const handleTotalBudgetChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    setTotalBudget(value);
    setBudgetData({
      ...budgetData,
      totalBudget: parseFloat(value) || 0,
    });
    localStorage.setItem('totalBudget', value);
  };

  const totalAmount = budgetData.expenses.reduce((total, item) => total + item.amount, 0);
  const totalRemaining = totalBudget ? totalBudget - totalAmount : 0;

  const groupedItems = budgetData.expenses.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const pieData = {
    labels: Object.keys(groupedItems),
    datasets: [
      {
        data: Object.keys(groupedItems).map(category =>
          groupedItems[category].reduce((total, item) => total + item.amount, 0)
        ),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
        borderColor: '#fff',
        borderWidth: 2,
      }
    ]
  };

  const pieOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: '#fff',
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: $${tooltipItem.raw}`;
          }
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
  };

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
            data-tooltip-id="totalBudgetTooltip"
          />
          <Tooltip id="totalBudgetTooltip" place="top" effect="solid">
            Enter your total budget here
          </Tooltip>
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
      <div className={styles.pieChartWrapper}>
        <h2 className={styles.chartTitle}>Expenses Breakdown</h2>
        <div className={styles.pieChartContainer}>
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>
    </div>
  );
};

export default BudgetManager;
