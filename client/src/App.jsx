import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Login from './utils/login';
import SignUp from './utils/Signup';
import TransactionsPage from './pages/TransactionsPage';
import GoalsManager from './pages/GoalsManager';
import InvestmentDetails from './pages/InvestmentDetails';
import InvestmentList from './investments/InvestmentList';
import InvestmentForm from './investments/investmentForm';
import BudgetManager from './pages/BudgetManager';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import LearningResources from './learning/LearningResources';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Sidebar />
        <div className="content">
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
            <Route path="/budget" element={<BudgetManager />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/learning-resources" element={<LearningResources />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
