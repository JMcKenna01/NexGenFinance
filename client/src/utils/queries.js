import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      transactions {
        id
        type
        amount
      }
      accounts {
        id
        name
      }
      budgets {
        id
        category
        limit
      }
      investments {
        id
        type
        amount
      }
    }
  }
`;

export const GET_TRANSACTIONS = gql`
  query GetTransactions($userId: ID!, $type: String, $category: String, $limit: Int, $offset: Int) {
    getTransactions(userId: $userId, type: $type, category: $category, limit: $limit, offset: $offset) {
      transactions {
        id
        type
        category
        amount
        date
      }
      totalCount
    }
  }
`;

export const GET_ACCOUNT = gql`
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      name
      accountType
      balance
      transactions {
        id
        type
      }
    }
  }
`;

export const GET_BUDGET = gql`
  query GetBudget($id: ID!) {
    getBudget(id: $id) {
      id
      category
      limit
      currentSpend
    }
  }
`;

export const GET_INVESTMENT = gql`
  query GetInvestment($id: ID!) {
    getInvestment(id: $id) {
      id
      type
      amount
      date
    }
  }
`;
