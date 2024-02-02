import React from 'react';
import axios from 'axios';

export const getPizzas = () => {
  return axios.get('/api/pizza');
};
