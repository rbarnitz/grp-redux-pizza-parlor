import React, { useEffect } from 'react';
import PizzaCard from '../PizzaCard/PizzaCard';
import { getPizzas } from '../../Service/apiService';
import 'axios';
import { useDispatch, useSelector } from 'react-redux';
import './PizzaList.css';

function PizzaList() {
  const pizzaList = useSelector((state) => state.pizzaListReducer);

  const dispatch = useDispatch();

  const fetchPizzas = () => {
    getPizzas()
      .then((response) => {
        dispatch({
          type: 'SET_PIZZA_LIST',
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error('Error fetching the pizzas: ', error);
      });
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <>
      <h2>Step 1: Select Your Pizza</h2>
      <div className="pizzaContainer">
        {pizzaList.map((pizza, index) => (
          <PizzaCard key={index} pizza={pizza} />
        ))}
      </div>

      <div>
        <button>Next</button>
      </div>
    </>
  );
}

export default PizzaList;
