const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express();

// Defining the GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Defining the resolvers for the schema
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};

// Creating the Apollo Server with the schema and resolvers
const server = new ApolloServer({ typeDefs, resolvers });

// Starting the Apollo Server
async function startServer() {
    await server.start();
    server.applyMiddleware({ app });
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
