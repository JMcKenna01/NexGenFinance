import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Login from './utils/login';
import LogoutBtn from './utils/LogoutBtn' // Ensure the case matches the file name
import SignUp from './utils/Signup'; // Ensure the case matches the file name
import TransactionsPage from './pages/TransactionsPage';
import GoalsManager from './pages/GoalsManager';
import InvestmentDetails from './pages/InvestmentDetails';
import InvestmentList from './investments/InvestmentList'; // Corrected path based on provided location
import InvestmentForm from './investments/investmentForm'; // Corrected path based on provided location
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
