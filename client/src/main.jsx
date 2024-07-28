import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { QueriesProvider } from './utils/QueriesContext'; // Correct import
import App from './App';
import './index.css';

// Configure the HTTP link for Apollo Client
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql', // Adjust this URI to match your GraphQL server
});

// Create an auth link to include the JWT token in the headers
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Configure Apollo Client with authLink and httpLink
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Configure React Router
const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />, // App component that serves as the entry point to your routes
  },
  // Add more route objects here as needed
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <QueriesProvider> {/* Wrap with QueriesProvider */}
        <RouterProvider router={router} />
      </QueriesProvider>
    </ApolloProvider>
  </React.StrictMode>
);