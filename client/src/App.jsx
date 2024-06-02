import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Login from './utils/Login'; // Corrected path based on utils folder
import SignUp from './utils/SignUp'; // Corrected path based on utils folder
import TransactionsPage from './pages/TransactionsPage';
import GoalsManager from './pages/GoalsManager';
import InvestmentDetails from './pages/InvestmentDetails';
import InvestmentList from './components/InvestmentList';
import InvestmentForm from './components/InvestmentForm';
import BudgetManager from './pages/BudgetManager';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import LearningResources from './pages/LearningResources';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main">
          <Sidebar />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/profile" component={Profile} />
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} /> {/* Ensure this path is correct */}
              <Route path="/signup" component={SignUp} /> {/* Ensure this path is correct */}
              <Route path="/transactions" component={TransactionsPage} />
              <Route path="/goals" component={GoalsManager} />
              <Route exact path="/investments" component={InvestmentList} />
              <Route path="/investments/new" component={InvestmentForm} />
              <Route path="/investments/:id" component={InvestmentDetails} />
              <Route path="/budget" component={BudgetManager} />
              <Route path="/contact" component={Contact} />
              <Route path="/learning-resources" component={LearningResources} />
              {/* Add other routes here */}
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
