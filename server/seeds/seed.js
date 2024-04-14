const mongoose = require('mongoose');
const User = require('./models/User');
const Transaction = require('./models/Transaction');
const Investment = require('./models/Investment');
const Budget = require('./models/Budget');
const Account = require('./models/Account');

mongoose.connect('mongodb://localhost:27017/nexgenfinance', { useNewUrlParser: true, useUnifiedTopology: true });

// Insert sample data for users
User.insertMany(users)
  .then(() => {
    console.log('Sample users inserted successfully');
    // Proceed to insert sample data for transactions
    return Transaction.insertMany(transactions);
  })
  .then(() => {
    console.log('Sample transactions inserted successfully');
    // Proceed to insert sample data for investments
    return Investment.insertMany(investments);
  })
  .then(() => {
    console.log('Sample investments inserted successfully');
    // Proceed to insert sample data for budgets
    return Budget.insertMany(budgets);
  })
  .then(() => {
    console.log('Sample budgets inserted successfully');
    // Proceed to insert sample data for accounts
    return Account.insertMany(accounts);
  })
  .then(() => {
    console.log('Sample accounts inserted successfully');
    // Close the MongoDB connection
    mongoose.connection.close();
  })
  .catch(error => {
    console.error('Error inserting sample data:', error);
    // Close the MongoDB connection in case of error
    mongoose.connection.close();
  });
