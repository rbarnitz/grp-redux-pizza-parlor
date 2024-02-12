import React from 'react';
import axios from 'axios';
import './App.css';
import PizzaList from '../../components/PizzaList/PizzaList';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <PizzaList />
    </div>
  );
}

export default App;
