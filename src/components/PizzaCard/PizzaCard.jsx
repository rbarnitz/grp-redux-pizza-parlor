import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function PizzaCard({ pizza }) {
  const dispatch = useDispatch();

  //to toggle remove pizza
  //make boolean  variable to check if pizza is in cart
  const pizzaCart = useSelector((state) => state.addPizzaReducer);

  //check if pizza is in the current cart.
  //.some() checks the entire array & returns true if array matches'
  const inCart = pizzaCart.some((cartItem) => cartItem.id === pizza.id);

  function addToCart() {
    dispatch({
      type: 'ADD_TO_CART',
      payload: pizza,
    });
  }

  function removeFromCart() {
    console.log('removing');
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: pizza,
    });
  }

  return (
    <div>
      <div className="imgContainer">
        <img src={pizza.image_path} />
      </div>
      <div className="pizza-title-container">
        <h2>{pizza.name}</h2>
        <p>{pizza.description}</p>
      </div>
      <div>
        <h3>{pizza.price}</h3>
      </div>
      <button onClick={addToCart}>Add Pizza</button>
      <button onClick={removeFromCart}>Remove Pizza</button>
    </div>
  );
}

export default PizzaCard;
