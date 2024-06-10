import React, { createContext, useContext } from 'react';
import { useMutation } from '@apollo/client';
import {
  LOGIN,
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
  CREATE_TRANSACTION,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION,
  CREATE_ACCOUNT,
  UPDATE_ACCOUNT,
  DELETE_ACCOUNT,
  CREATE_BUDGET,
  UPDATE_BUDGET,
  DELETE_BUDGET,
  CREATE_INVESTMENT,
  UPDATE_INVESTMENT,
  DELETE_INVESTMENT,
  SIGNUP_USER
} from './mutations';
import auth from './auth';

const QueriesContext = createContext();

export const useQueriesContext = () => useContext(QueriesContext);

export const QueriesProvider = ({ children }) => {
  const [loginUser, { error: loginUserError }] = useMutation(LOGIN);
  const [createUser, { error: createUserError }] = useMutation(CREATE_USER);
  const [updateUser, { error: updateUserError }] = useMutation(UPDATE_USER);
  const [deleteUser, { error: deleteUserError }] = useMutation(DELETE_USER);
  const [createTransaction, { error: createTransactionError }] = useMutation(CREATE_TRANSACTION);
  const [updateTransaction, { error: updateTransactionError }] = useMutation(UPDATE_TRANSACTION);
  const [deleteTransaction, { error: deleteTransactionError }] = useMutation(DELETE_TRANSACTION);
  const [createAccount, { error: createAccountError }] = useMutation(CREATE_ACCOUNT);
  const [updateAccount, { error: updateAccountError }] = useMutation(UPDATE_ACCOUNT);
  const [deleteAccount, { error: deleteAccountError }] = useMutation(DELETE_ACCOUNT);
  const [createBudget, { error: createBudgetError }] = useMutation(CREATE_BUDGET);
  const [updateBudget, { error: updateBudgetError }] = useMutation(UPDATE_BUDGET);
  const [deleteBudget, { error: deleteBudgetError }] = useMutation(DELETE_BUDGET);
  const [createInvestment, { error: createInvestmentError }] = useMutation(CREATE_INVESTMENT);
  const [updateInvestment, { error: updateInvestmentError }] = useMutation(UPDATE_INVESTMENT);
  const [deleteInvestment, { error: deleteInvestmentError }] = useMutation(DELETE_INVESTMENT);
  const [signUp, { error: signUpError }] = useMutation(SIGNUP_USER);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

  function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  }

  const contextValue = {
    mutations: {
      loginUser,
      createUser,
      updateUser,
      deleteUser,
      createTransaction,
      updateTransaction,
      deleteTransaction,
      createAccount,
      updateAccount,
      deleteAccount,
      createBudget,
      updateBudget,
      deleteBudget,
      createInvestment,
      updateInvestment,
      deleteInvestment,
      signUp
    },
    errors: {
      loginUserError,
      createUserError,
      updateUserError,
      deleteUserError,
      createTransactionError,
      updateTransactionError,
      deleteTransactionError,
      createAccountError,
      updateAccountError,
      deleteAccountError,
      createBudgetError,
      updateBudgetError,
      deleteBudgetError,
      createInvestmentError,
      updateInvestmentError,
      deleteInvestmentError,
      signUpError
    },
    validateEmail,
    classNames,
    formatCurrency
  };

  return (
    <QueriesContext.Provider value={contextValue}>
      {children}
    </QueriesContext.Provider>
  );
};
