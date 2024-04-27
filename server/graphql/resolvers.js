const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Account, Budget, Investment, Transaction, User } = require('../../models');

// Helper function to create a JWT token
const createToken = (user, expiresIn) => {
  const { id, email, username } = user;
  const secret = process.env.JWT_SECRET || 'fallbackSecret'; // Use the same fallback method
  return jwt.sign({ id, email, username }, secret, { expiresIn });
};

const resolvers = {
  Query: {
    getUser: async (_, { id }) => {
      try {
        const user = await User.findById(id);
        if (!user) throw new Error('User not found');
        return user;
      } catch (error) {
        throw new Error(`Error fetching user: ${error.message}`);
      }
    },
    getTransaction: async (_, { id }) => {
      try {
        const transaction = await Transaction.findById(id);
        if (!transaction) throw new Error('Transaction not found');
        return transaction;
      } catch (error) {
        throw new Error(`Error fetching transaction: ${error.message}`);
      }
    },
    getAccount: async (_, { id }) => {
      try {
        const account = await Account.findById(id);
        if (!account) throw new Error('Account not found');
        return account;
      } catch (error) {
        throw new Error(`Error fetching account: ${error.message}`);
      }
    },
    getBudget: async (_, { id }) => {
      try {
        const budget = await Budget.findById(id);
        if (!budget) throw new Error('Budget not found');
        return budget;
      } catch (error) {
        throw new Error(`Error fetching budget: ${error.message}`);
      }
    },
    getInvestment: async (_, { id }) => {
      try {
        const investment = await Investment.findById(id);
        if (!investment) throw new Error('Investment not found');
        return investment;
      } catch (error) {
        throw new Error(`Error fetching investment: ${error.message}`);
      }
    },
  },
  Mutation: {
    login: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) throw new Error('User not found');
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) throw new Error('Invalid password');
        return {
          userId: user.id,
          token: createToken(user, '2h'), // No need to pass secret here, handle it within createToken
          tokenExpiration: 1
        };
      } catch (error) {
        throw new Error(`Login failed: ${error.message}`);
      }
    },
    createUser: async (_, { username, email, password }) => {
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) throw new Error('User already exists');
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
          username,
          email,
          password: hashedPassword
        });
        const result = await newUser.save();
        return result;
      } catch (error) {
        throw new Error(`Error creating user: ${error.message}`);
      }
    },

    deleteUser: async (_, { id }) => {
      try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) throw new Error('User not found');
        return deletedUser;
      } catch (error) {
        throw new Error(`Error deleting user: ${error.message}`);
      }
    },

    createTransaction: async (_, { type, category, amount, date, accountId }) => {
      try {
        const newTransaction = new Transaction({
          type,
          category,
          amount,
          date,
          account: accountId
        });
        const savedTransaction = await newTransaction.save();
        return savedTransaction;
      } catch (error) {
        throw new Error(`Error creating transaction: ${error.message}`);
      }
    },
    createAccount: async (_, { name, accountType, balance }) => {
      try {
        const newAccount = new Account({
          name,
          accountType,
          balance
        });
        const savedAccount = await newAccount.save();
        return savedAccount;
      } catch (error) {
        throw new Error(`Error creating account: ${error.message}`);
      }
    },
    createBudget: async (_, { category, limit, currentSpend }) => {
      try {
        const newBudget = new Budget({
          category,
          limit,
          currentSpend
        });
        const savedBudget = await newBudget.save();
        return savedBudget;
      } catch (error) {
        throw new Error(`Error creating budget: ${error.message}`);
      }
    },
    createInvestment: async (_, { type, amount, date, firm, broker }) => {
      try {
        const newInvestment = new Investment({
          type,
          amount,
          date,
          firm,
          broker
        });
        const savedInvestment = await newInvestment.save();
        return savedInvestment;
      } catch (error) {
        throw new Error(`Error creating investment: ${error.message}`);
      }
    },
  },
  User: {
    transactions: async (user) => {
      try {
        return await Transaction.find({ userId: user.id });
      } catch (error) {
        throw new Error(`Error fetching user transactions: ${error.message}`);
      }
    },
    accounts: async (user) => {
      try {
        return await Account.find({ userId: user.id });
      } catch (error) {
        throw new Error(`Error fetching user accounts: ${error.message}`);
      }
    },
    budgets: async (user) => {
      try {
        return await Budget.find({ userId: user.id });
      } catch (error) {
        throw new Error(`Error fetching user budgets: ${error.message}`);
      }
    },
    investments: async (user) => {
      try {
        return await Investment.find({ userId: user.id });
      } catch (error) {
        throw new Error(`Error fetching user investments: ${error.message}`);
      }
    },
  },
  Account: {
    transactions: async (account) => {
      try {
        return await Transaction.find({ accountId: account.id });
      } catch (error) {
        throw new Error(`Error fetching account transactions: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;
