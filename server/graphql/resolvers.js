const resolvers = {
    Query: {
      getUser: async (_, { id }) => {
        // Fetch a user by ID from the database
      },
      // Implement other queries
    },
    Mutation: {
      createUser: async (_, { username, email }) => {
        // Create a user and return new user data
      },
      // Implement other mutations
    }
    // define more resolvers if needed
  };
  
  module.exports = resolvers;
  