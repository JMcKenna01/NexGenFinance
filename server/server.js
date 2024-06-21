require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./graphql');
const db = require('./config/connection');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();

// Configure CORS
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'], // Add all frontend origins here
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

console.log('JWT_SECRET:', process.env.JWT_SECRET); // Verify the secret is loaded

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  persistedQueries: false,
});

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

// Start the Apollo Server
startApolloServer();
