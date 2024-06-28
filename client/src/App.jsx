import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import TransactionsPage from './pages/TransactionsPage';
import GoalsManager from './pages/GoalsManager';
import InvestmentDetails from './pages/InvestmentDetails';
import InvestmentList from './investments/InvestmentList';
import InvestmentForm from './components/forms/InvestmentForm';
import BudgetManager from './pages/BudgetManager';
import FinancialManager from './pages/FinancialManager';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import LearningResources from './learning/LearningResources';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import Sidebar from './components/ui/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Sidebar />
        <div className="contentWrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/goals" element={<GoalsManager />} />
            <Route path="/investments" element={<InvestmentList />} />
            <Route path="/investments/new" element={<InvestmentForm />} />
            <Route path="/investments/:id" element={<InvestmentDetails />} />
            <Route path="/financial" element={<FinancialManager />} />
            <Route path="/budget" element={<BudgetManager />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/learning-resources" element={<LearningResources />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
