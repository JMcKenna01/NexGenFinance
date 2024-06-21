const { User, Account, Budget, Investment, Transaction } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// Helper function to create a JWT token
const createToken = (user, expiresIn) => {
  const { id, email, username } = user;
  const secret = process.env.JWT_SECRET || 'fallbackSecret';
  return jwt.sign({ id, email, username }, secret, { expiresIn });
};

const saltRounds = 12;

// OAuth2 setup
const oAuth2Client = new google.auth.OAuth2(
  process.env.OAUTH_CLIENT_ID,
  process.env.OAUTH_CLIENT_SECRET,
  process.env.OAUTH_REDIRECT_URI
);

oAuth2Client.setCredentials({
  refresh_token: process.env.OAUTH_REFRESH_TOKEN
});

const resolvers = {
  Query: {
    getUser: async (_, { id }) => {
      const user = await User.findById(id);
      if (!user) throw new Error('User not found');
      return user;
    },
    getUserByEmail: async (_, { email }) => {
      const user = await User.findOne({ email });
      if (!user) throw new Error('User not found');
      return user;
    },
    getTransaction: async (_, { id }) => {
      const transaction = await Transaction.findById(id);
      if (!transaction) throw new Error('Transaction not found');
      return transaction;
    },
    getAccount: async (_, { id }) => {
      const account = await Account.findById(id);
      if (!account) throw new Error('Account not found');
      return account;
    },
    getBudget: async (_, { id }) => {
      const budget = await Budget.findById(id);
      if (!budget) throw new Error('Budget not found');
      return budget;
    },
    getInvestment: async (_, { id }) => {
      const investment = await Investment.findById(id);
      if (!investment) throw new Error('Investment not found');
      return investment;
    },
    welcomeMessage: () => {
      return "Welcome to NexGenFinance!";
    },
    userStatistics: async () => {
      // Replace the below lines with actual data fetching logic
      return {
        totalIncome: 10000,
        totalExpenses: 5000,
        totalInvestments: 20000
      };
    },
    budgets: async () => {
      const budgets = await Budget.find();
      return budgets.map(budget => ({
        ...budget.toObject(),
        category: budget.category || 'Default Category',
        limit: budget.limit !== null ? budget.limit : 0
      }));
    },
    financialGoals: async () => {
      // Replace the below line with actual data fetching logic
      return [
        { goal: 'Save $10,000', progress: 70 },
        { goal: 'Pay off student loans', progress: 40 }
      ];
    },
    investments: async () => {
      const investments = await Investment.find();
      return investments.map(investment => ({
        ...investment.toObject(),
        type: investment.type || 'Default Type',
        amount: investment.amount !== null ? investment.amount : 0,
        date: investment.date || new Date().toISOString()
      }));
    },
  },

  Mutation: {
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error('Invalid password');
      }

      const token = createToken(user, '2h');
      return {
        userId: user.id,
        token,
        tokenExpiration: 2
      };
    },

    addUser: async (_, { username, email, password }) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) throw new Error('User already exists');

      const newUser = new User({
        username,
        email,
        password
      });

      const result = await newUser.save();
      return result;
    },

    deleteUser: async (_, { id }) => {
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) throw new Error('User not found');
      return deletedUser;
    },

    updateUser: async (_, { id, username, email, currentPassword, newPassword }) => {
      const user = await User.findById(id);
      if (!user) throw new Error('User not found');

      if (newPassword && !(await bcrypt.compare(currentPassword, user.password))) {
        throw new Error('Current password is incorrect');
      }

      if (newPassword) {
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
        user.password = hashedPassword;
      }

      if (username) user.username = username;

      if (email) {
        const existingEmailUser = await User.findOne({ email });
        if (existingEmailUser && existingEmailUser.id !== id) {
          throw new Error('Email already in use');
        }
        user.email = email;
      }

      const updatedUser = await user.save();
      return updatedUser;
    },

    createTransaction: async (_, { type, category, amount, date, accountId }) => {
      const newTransaction = new Transaction({
        type,
        category,
        amount,
        date,
        account: accountId
      });

      const savedTransaction = await newTransaction.save();
      return savedTransaction;
    },

    updateTransaction: async (_, { id, type, category, amount, date }) => {
      const transaction = await Transaction.findById(id);
      if (!transaction) throw new Error('Transaction not found');

      transaction.type = type;
      transaction.category = category;
      transaction.amount = amount;
      transaction.date = date;

      const updatedTransaction = await transaction.save();
      return updatedTransaction;
    },

    deleteTransaction: async (_, { id }) => {
      const deletedTransaction = await Transaction.findByIdAndDelete(id);
      if (!deletedTransaction) throw new Error('Transaction not found');
      return deletedTransaction;
    },

    createAccount: async (_, { name, accountType, balance }) => {
      const newAccount = new Account({
        name,
        accountType,
        balance
      });

      const savedAccount = await newAccount.save();
      return savedAccount;
    },

    updateAccount: async (_, { id, name, accountType, balance }) => {
      const account = await Account.findById(id);
      if (!account) throw new Error('Account not found');

      account.name = name;
      account.accountType = accountType;
      account.balance = balance;

      const updatedAccount = await account.save();
      return updatedAccount;
    },

    deleteAccount: async (_, { id }) => {
      const deletedAccount = await Account.findByIdAndDelete(id);
      if (!deletedAccount) throw new Error('Account not found');
      return deletedAccount;
    },

    createBudget: async (_, { category, limit, currentSpend, userId }) => {
      const newBudget = new Budget({
        category,
        limit,
        currentSpend,
        user: userId
      });

      const savedBudget = await newBudget.save();
      return savedBudget;
    },

    updateBudget: async (_, { id, category, limit, currentSpend }) => {
      const budget = await Budget.findById(id);
      if (!budget) throw new Error('Budget not found');

      budget.category = category;
      budget.limit = limit;
      budget.currentSpend = currentSpend;

      const updatedBudget = await budget.save();
      return updatedBudget;
    },

    deleteBudget: async (_, { id }) => {
      const deletedBudget = await Budget.findByIdAndDelete(id);
      if (!deletedBudget) throw new Error('Budget not found');
      return deletedBudget;
    },

    createInvestment: async (_, { type, amount, date, firm, broker, userId }) => {
      const newInvestment = new Investment({
        type,
        amount,
        date,
        firm,
        broker,
        user: userId
      });

      const savedInvestment = await newInvestment.save();
      return savedInvestment;
    },

    updateInvestment: async (_, { id, type, amount, date, firm, broker }) => {
      const investment = await Investment.findById(id);
      if (!investment) throw new Error('Investment not found');

      investment.type = type;
      investment.amount = amount;
      investment.date = date;
      investment.firm = firm;
      investment.broker = broker;

      const updatedInvestment = await investment.save();
      return updatedInvestment;
    },

    deleteInvestment: async (_, { id }) => {
      const deletedInvestment = await Investment.findByIdAndDelete(id);
      if (!deletedInvestment) throw new Error('Investment not found');
      return deletedInvestment;
    },

    sendEmail: async (_, { name, email, message }) => {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error('Invalid email format');
      }

      try {
        const accessTokenResponse = await oAuth2Client.getAccessToken();
        const accessToken = accessTokenResponse.token;

        if (!accessToken) {
          throw new Error('Failed to obtain access token');
        }

        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            type: 'OAuth2',
            user: process.env.EMAIL_USER,
            clientId: process.env.OAUTH_CLIENT_ID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
            accessToken: accessToken
          }
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: `Message from ${name}`,
          text: message
        };

        await transporter.sendMail(mailOptions);
        return true;
      } catch (error) {
        console.error('Error occurred while sending email:', error);
        throw new Error('Failed to send email');
      }
    }
  },

  User: {
    transactions: async (user) => {
      return await Transaction.find({ userId: user.id });
    },

    accounts: async (user) => {
      return await Account.find({ userId: user.id });
    },

    budgets: async (user) => {
      return await Budget.find({ userId: user.id });
    },

    investments: async (user) => {
      return await Investment.find({ userId: user.id });
    },
  },

  Account: {
    transactions: async (account) => {
      return await Transaction.find({ accountId: account.id });
    },
  },
};

module.exports = resolvers;
