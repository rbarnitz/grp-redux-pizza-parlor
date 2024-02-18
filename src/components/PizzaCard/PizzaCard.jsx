import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function PizzaCard({ pizza }) {
  const dispatch = useDispatch();

  // Store the pizza cart status as a boolean in a variable
  const pizzaCart = useSelector((state) => state.addPizzaReducer);

  // Check if the current Pizza is in the cart using the .some() method
  // .some() will check the entire array and return true if any element in the array matches
  // the given function
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
    <div className="pizzaItem">
      <div className="imgContainer">
        <img src={pizza.image_path} className="pizzaImage" />
      </div>
      <div className="pizza-title-container">
        <h2>{pizza.name}</h2>
        <p>{pizza.description}</p>
      </div>
      <div>
        <h3>{pizza.price}</h3>
      </div>
      {inCart ? (
        <button onClick={removeFromCart}>Remove Pizza</button>
      ) : (
        <button onClick={addToCart}>Add Pizza</button>
      )}
    </div>
  );
}

export default PizzaCard;
