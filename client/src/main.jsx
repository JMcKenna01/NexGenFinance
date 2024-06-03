import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import App from './App';
import './index.css';

// Configure the Apollo Client
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql', // Adjust this URI to match your GraphQL server
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

// Configure React Router
const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />, // App component that serves as the entry point to your routes
  },
  // Add more route objects here as needed
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
