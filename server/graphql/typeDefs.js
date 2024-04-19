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
    userId: ID!
  }

  type Investment {
    id: ID!
    type: String!
    amount: Float!
    date: String!
    firm: String
    broker: String
    userId: ID!
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  type Query {
    getUser(id: ID!): User
    getTransaction(id: ID!): Transaction
    getAccount(id: ID!): Account
    getBudget(id: ID!): Budget
    getInvestment(id: ID!): Investment
  }

  type Mutation {
    login(email: String!, password: String!): AuthData
    createUser(username: String!, email: String!, password: String!): User
    deleteUser(id: ID!): User
    createTransaction(type: String!, category: String, amount: Float!, date: String!, accountId: ID!): Transaction
    createAccount(name: String!, accountType: String!, balance: Float!): Account
    createBudget(category: String!, limit: Float!, currentSpend: Float!, userId: ID!): Budget
    createInvestment(type: String!, amount: Float!, date: String!, firm: String, broker: String, userId: ID!): Investment
  }
`;

module.exports = typeDefs;
