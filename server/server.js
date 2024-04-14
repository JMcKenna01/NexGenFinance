const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const schema = require('./schema/index');  // Import your GraphQL schema

const app = express();

// Creating the Apollo Server with the imported schema
const server = new ApolloServer({ schema });

// Starting the Apollo Server
async function startServer() {
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });  // Explicitly define the GraphQL path if needed
}

startServer();

app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

const PORT = process.env.PORT || 4000;

// Starting the Express server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`🚀 GraphQL ready at http://localhost:${PORT}${server.graphqlPath}`);
});
