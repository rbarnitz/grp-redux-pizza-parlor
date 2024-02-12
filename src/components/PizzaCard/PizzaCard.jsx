import React from 'react';
import { useDispatch } from 'react-redux';

function PizzaCard({ pizza }) {
  const dispatch = useDispatch();

  function addToCart() {
    dispatch({
      type: 'ADD_TO_CART',
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
    </div>
  );
}

export default PizzaCard;
