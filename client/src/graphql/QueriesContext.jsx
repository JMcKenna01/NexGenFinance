import { createContext, useContext, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { LOGIN_USER, UPDATE_USER, DELETE_USER, ADD_TRANSACTION, UPDATE_TRANSACTION, DELETE_TRANSACTION } from './mutations';

const QueriesContext = createContext();

export const useQueriesContext = () => useContext(QueriesContext);

export const QueriesProvider = ({ children }) => {
  const [loginUser, { error: loginUserError }] = useMutation(LOGIN_USER);
  const [updateUser, { error: updateUserError }] = useMutation(UPDATE_USER);
  const [deleteUser, { error: deleteUserError }] = useMutation(DELETE_USER);
  const [addTransaction, { error: addTransactionError }] = useMutation(ADD_TRANSACTION);
  const [updateTransaction, { error: updateTransactionError }] = useMutation(UPDATE_TRANSACTION);
  const [deleteTransaction, { error: deleteTransactionError }] = useMutation(DELETE_TRANSACTION);

  // Utility function to format currency
  function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  }

  const contextValue = {
    loginUser,
    updateUser,
    deleteUser,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    loginUserError,
    updateUserError,
    deleteUserError,
    addTransactionError,
    updateTransactionError,
    deleteTransactionError,
    formatCurrency,
  };

  return (
    <QueriesContext.Provider value={contextValue}>
      {children}
    </QueriesContext.Provider>
  );
};
