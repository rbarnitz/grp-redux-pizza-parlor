import React from 'react';
import 'axios';

const BASE_URL = 'http://localhost:5001';

export const getPizzas = () => {
  return axios.get(`${BASE_URL}/api/pizza`);
};
