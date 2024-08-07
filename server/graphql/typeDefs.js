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
    user: User
  }

  type Account {
    id: ID!
    name: String!
    accountType: String!
    balance: Float!
    transactions: [Transaction]
    user: User
  }

  type Budget {
    id: ID!
    category: String
    limit: Float
    currentSpend: Float!
    user: User
  }

  type Investment {
    id: ID!
    type: String
    amount: Float
    date: String
    firm: String
    broker: String
    user: User
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  type UserStatistics {
    totalIncome: Float!
    totalExpenses: Float!
    totalInvestments: Float!
  }

  type FinancialGoal {
    goal: String!
    progress: Int!
  }

  type Query {
    getProfileData (id: ID!): User
    getUser(id: ID!): User
    getUserByEmail(email: String!): User
    getTransaction(id: ID!): Transaction
    getAccount(id: ID!): Account
    getBudget(id: ID!): Budget
    getInvestment(id: ID!): Investment
    welcomeMessage: String
    userStatistics: UserStatistics
    budgets: [Budget]
    financialGoals: [FinancialGoal]
    investments: [Investment]
  }

  type Mutation {
    login(email: String!, password: String!): AuthData
    addUser(username: String!, email: String!, password: String!): User
    updateUser(id: ID!, username: String, email: String, currentPassword: String, newPassword: String): User
    deleteUser(id: ID!): User
    createTransaction(type: String!, category: String, amount: Float!, date: String!, accountId: ID!): Transaction
    updateTransaction(id: ID!, type: String!, category: String, amount: Float!, date: String!): Transaction
    deleteTransaction(id: ID!): Transaction
    createAccount(name: String!, accountType: String!, balance: Float!): Account
    updateAccount(id: ID!, name: String!, accountType: String!, balance: Float!): Account
    deleteAccount(id: ID!): Account
    createBudget(category: String!, limit: Float!, currentSpend: Float!, userId: ID!): Budget
    updateBudget(id: ID!, category: String!, limit: Float!, currentSpend: Float!): Budget
    deleteBudget(id: ID!): Budget
    createInvestment(type: String!, amount: Float!, date: String!, firm: String, broker: String, userId: ID!): Investment
    updateInvestment(id: ID!, type: String!, amount: Float!, date: String!, firm: String, broker: String): Investment
    deleteInvestment(id: ID!): Investment
    sendEmail(name: String!, email: String!, message: String!): Boolean
  }
`;

module.exports = typeDefs;