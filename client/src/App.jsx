import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import TransactionsPage from './pages/TransactionsPage';
import GoalsManager from './pages/GoalsManager';
import InvestmentDetailsPage from './pages/InvestmentDetailsPage';
import InvestmentsPage from './pages/InvestmentsPage';
import InvestmentForm from './components/forms/InvestmentForm';
import BudgetManager from './pages/BudgetManager';
import FinancialOverview from './pages/FinancialOverview';
import AccountsPage from './pages/AccountsPage';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import LearningResources from './learning/LearningResources';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import Sidebar from './components/ui/Sidebar';
import { QueriesProvider } from './utils/QueriesContext'; // Correct import
import AuthService from './utils/auth'; // Import AuthService
import './App.css';

const PrivateRoute = ({ element: Element, ...rest }) => {
  return AuthService.loggedIn() ? <Element {...rest} /> : <Navigate to="/dashboard" />;
};

function App() {
  const [isSidebarHidden, setSidebarHidden] = useState(false);

  const toggleSidebar = () => {
    setSidebarHidden(!isSidebarHidden);
  };

  return (
    <QueriesProvider>
      <div className="App">
        {AuthService.loggedIn() && <Navbar />}
        <div className="main">
          {AuthService.loggedIn() && <Sidebar isSidebarHidden={isSidebarHidden} toggleSidebar={toggleSidebar} />}
          <div className={isSidebarHidden ? 'contentWrapper sidebarHidden' : 'contentWrapper'}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<PrivateRoute element={Home} />} />
              <Route path="/profile" element={<PrivateRoute element={Profile} />} />
              <Route path="/about" element={<PrivateRoute element={About} />} />
              <Route path="/transactions" element={<PrivateRoute element={TransactionsPage} />} />
              <Route path="/accounts" element={<PrivateRoute element={AccountsPage} />} />
              <Route path="/goals" element={<PrivateRoute element={GoalsManager} />} />
              <Route path="/investments" element={<PrivateRoute element={InvestmentsPage} />} />
              <Route path="/investments/new" element={<PrivateRoute element={InvestmentForm} />} />
              <Route path="/investments/:id" element={<PrivateRoute element={InvestmentDetailsPage} />} />
              <Route path="/financial-overview" element={<PrivateRoute element={FinancialOverview} />} />
              <Route path="/budget" element={<PrivateRoute element={BudgetManager} />} />
              <Route path="/contact" element={<PrivateRoute element={Contact} />} />
              <Route path="/learning-resources" element={<PrivateRoute element={LearningResources} />} />
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </div>
        </div>
        {AuthService.loggedIn() && <Footer />}
      </div>
    </QueriesProvider>
  );
}

export default App;
