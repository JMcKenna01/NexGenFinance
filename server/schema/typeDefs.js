const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    transactions: [Transaction]
    accounts: [Account]
    budgets: [Budget]
    investments: [Investment]
  }

  type Transaction {
    id: ID!
    type: String!
    category: String
    amount: Float!
    date: String!
    account: Account
  }

  type Account {
    id: ID!
    name: String!
    accountType: String!
    balance: Float!
    transactions: [Transaction]
  }

  type Budget {
    id: ID!
    category: String!
    limit: Float!
    currentSpend: Float!
  }

  type Investment {
    id: ID!
    type: String!
    amount: Float!
    date: String!
  }

  type Query {
    getUser(id: ID!): User
    getTransactions(userId: ID!): [Transaction]
    getAccount(accountId: ID!): Account
    getBudgets(userId: ID!): [Budget]
    getInvestments(userId: ID!): [Investment]
  }

  type Mutation {
    createUser(username: String!, email: String!): User
    createTransaction(userId: ID!, type: String!, category: String, amount: Float!, date: String!, accountId: ID!): Transaction
    updateAccountBalance(accountId: ID!, newBalance: Float!): Account
    createBudget(userId: ID!, category: String!, limit: Float!): Budget
    investAmount(userId: ID!, type: String!, amount: Float!, date: String!): Investment
  }
`;

module.exports = typeDefs;
