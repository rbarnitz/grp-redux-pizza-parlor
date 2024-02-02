import React, { useState, useEffect } from 'react';
import PizzaCard from '../PizzaCard/PizzaCard';
import { getPizzas } from '../../Service/apiService';
import 'axios';

function PizzaList() {
  const [pizzaList, setPizzaList] = useState([]);

  const fetchPizzas = () => {
    getPizzas()
      .then((response) => {
        setPizzaList(response.data);
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
      {pizzaList.map((pizza) => (
        <PizzaCard key={pizza.id} />
      ))}
      ;
    </>
  );
}

export default PizzaList;
