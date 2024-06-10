import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      token
      tokenExpiration
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      id
      username
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $username: String, $email: String, $currentPassword: String, $newPassword: String) {
    updateUser(id: $id, username: $username, email: $email, currentPassword: $currentPassword, newPassword: $newPassword) {
      id
      username
      email
    }
  }
`;

export const CREATE_TRANSACTION = gql`
  mutation CreateTransaction($type: String!, $category: String, $amount: Float!, $date: String!, $accountId: ID!) {
    createTransaction(type: $type, category: $category, amount: $amount, date: $date, accountId: $accountId) {
      id
      type
      category
      amount
      date
    }
  }
`;

export const UPDATE_TRANSACTION = gql`
  mutation UpdateTransaction($id: ID!, $type: String!, $category: String, $amount: Float!, $date: String!) {
    updateTransaction(id: $id, type: $type, category: $category, amount: $amount, date: $date) {
      id
      type
      category
      amount
      date
    }
  }
`;

export const DELETE_TRANSACTION = gql`
  mutation DeleteTransaction($id: ID!) {
    deleteTransaction(id: $id) {
      id
    }
  }
`;

export const CREATE_ACCOUNT = gql`
  mutation CreateAccount($name: String!, $accountType: String!, $balance: Float!) {
    createAccount(name: $name, accountType: $accountType, balance: $balance) {
      id
      name
      accountType
      balance
    }
  }
`;

export const UPDATE_ACCOUNT = gql`
  mutation UpdateAccount($id: ID!, $name: String!, $accountType: String!, $balance: Float!) {
    updateAccount(id: $id, name: $name, accountType: $accountType, balance: $balance) {
      id
      name
      accountType
      balance
    }
  }
`;

export const DELETE_ACCOUNT = gql`
  mutation DeleteAccount($id: ID!) {
    deleteAccount(id: $id) {
      id
    }
  }
`;

export const CREATE_BUDGET = gql`
  mutation CreateBudget($category: String!, $limit: Float!, $currentSpend: Float!, $userId: ID!) {
    createBudget(category: $category, limit: $limit, currentSpend: $currentSpend, userId: $userId) {
      id
      category
      limit
      currentSpend
    }
  }
`;

export const UPDATE_BUDGET = gql`
  mutation UpdateBudget($id: ID!, $category: String!, $limit: Float!, $currentSpend: Float!) {
    updateBudget(id: $id, category: $category, limit: $limit, currentSpend: $currentSpend) {
      id
      category
      limit
      currentSpend
    }
  }
`;

export const DELETE_BUDGET = gql`
  mutation DeleteBudget($id: ID!) {
    deleteBudget(id: $id) {
      id
    }
  }
`;

export const CREATE_INVESTMENT = gql`
  mutation CreateInvestment($type: String!, $amount: Float!, $date: String!, $firm: String, $broker: String, $userId: ID!) {
    createInvestment(type: $type, amount: $amount, date: $date, firm: $firm, broker: $broker, userId: $userId) {
      id
      type
      amount
      date
      firm
      broker
    }
  }
`;

export const UPDATE_INVESTMENT = gql`
  mutation UpdateInvestment($id: ID!, $type: String!, $amount: Float!, $date: String!, $firm: String, $broker: String) {
    updateInvestment(id: $id, type: $type, amount: $amount, date: $date, firm: $firm, broker: $broker) {
      id
      type
      amount
      date
      firm
      broker
    }
  }
`;

export const DELETE_INVESTMENT = gql`
  mutation DeleteInvestment($id: ID!) {
    deleteInvestment(id: $id) {
      id
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation SignUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password) {
      token
    }
  }
`;
