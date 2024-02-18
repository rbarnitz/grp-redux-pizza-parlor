import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import PizzaList from '../../components/PizzaList/PizzaList';
import Header from '../Header/Header';
import CustomerInfo from '../CustomerInfo/CustomerInfo';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Route path="/" exact>
          <PizzaList />
        </Route>

        <Route path="/order-information">
          <CustomerInfo />
        </Route>
      </Router>
    </div>
  );
}

export default App;
