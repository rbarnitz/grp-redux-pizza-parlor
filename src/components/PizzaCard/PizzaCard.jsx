import React from 'react';

function PizzaCard({ pizza }) {
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
      <button>Add Pizza</button>
    </div>
  );
}

export default PizzaCard;
