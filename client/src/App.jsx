import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TransactionsPage from './pages/TransactionsPage';
import GoalsManager from './pages/GoalsManager';
import InvestmentDetails from './pages/InvestmentDetails';
import InvestmentList from './components/InvestmentList'; // Import InvestmentList
import BudgetManager from './pages/BudgetManager';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
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
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/transactions" component={TransactionsPage} />
              <Route path="/goals" component={GoalsManager} />
              <Route exact path="/investments" component={InvestmentList} /> {/* Add InvestmentList route */}
              <Route path="/investments/:id" component={InvestmentDetails} /> {/* Add InvestmentDetails route */}
              <Route path="/budget" component={BudgetManager} />
              <Route path="/contact" component={Contact} />
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
