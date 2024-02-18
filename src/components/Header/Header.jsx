import React from 'react';
import './Header.css';
import { useSelector } from 'react-redux';

function Header() {
  const pizzaCart = useSelector((state) => state.addPizzaReducer);

  const pizzaTotal = pizzaCart.reduce(
    (total, pizza) => total + parseFloat(pizza.price),
    0
  );

  return (
    <header className="App-header">
      <h1 className="App-title">Prime Pizza</h1>
      <p>Total: ${pizzaTotal.toFixed(2)}</p>
    </header>
  );
}

export default Header;
