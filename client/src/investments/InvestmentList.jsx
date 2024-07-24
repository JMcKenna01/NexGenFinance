import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './InvestmentList.module.css';

const InvestmentList = ({ investments, onEdit, onDelete }) => {
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({});

  const handleEdit = (investment) => {
    setEditingId(investment.id);
    setEditValues(investment);
  };

  const handleSave = () => {
    onEdit(editValues);
    setEditingId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditValues({ ...editValues, [name]: value });
  };

  return (
    <div className={styles.investmentList}>
      {investments.length === 0 ? (
        <p>No investments available.</p>
      ) : (
        investments.map((investment) => (
          <div key={investment.id} className={styles.investmentItem}>
            {editingId === investment.id ? (
              <div className={styles.details}>
                <input
                  type="text"
                  name="name"
                  value={editValues.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="type"
                  value={editValues.type}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="amount"
                  value={editValues.amount}
                  onChange={handleChange}
                />
                <input
                  type="date"
                  name="date"
                  value={editValues.date}
                  onChange={handleChange}
                />
                <button onClick={handleSave} className={styles.saveButton}>
                  Save
                </button>
              </div>
            ) : (
              <div className={styles.details}>
                <h3 className={styles.name}>{investment.name}</h3>
                <p className={styles.type}>Type: {investment.type}</p>
                <p className={styles.amount}>Amount: ${investment.amount}</p>
                <p className={styles.date}>Date: {new Date(investment.date).toLocaleDateString()}</p>
              </div>
            )}
            <div className={styles.actions}>
              {editingId !== investment.id && (
                <button onClick={() => handleEdit(investment)} className={styles.editButton}>
                  Edit
                </button>
              )}
              <button onClick={() => onDelete(investment.id)} className={styles.deleteButton}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

InvestmentList.propTypes = {
  investments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default InvestmentList;
