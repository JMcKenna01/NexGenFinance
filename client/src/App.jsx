import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Transactions from './pages/Transactions';
import GoalsManager from './pages/GoalsManager';
import InvestmentDetails from './pages/InvestmentDetails';
import BudgetManager from './pages/BudgetManager';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/transactions" component={Transactions} />
            <Route path="/goals" component={GoalsManager} />
            <Route path="/investments" component={InvestmentDetails} />
            <Route path="/budget" component={BudgetManager} />
            <Route path="/contact" component={Contact} />
            {/* Add other routes here */}
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
