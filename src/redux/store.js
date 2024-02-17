import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const pizzaListReducer = (state = [], action) => {
  if (action.type === 'SET_PIZZA_LIST') {
    return action.payload;
  }

  return state;
};

const addPizzaReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      // Filter out the pizza with the specified payload
      return state.filter((pizza) => pizza !== action.payload);
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    pizzaListReducer,
    addPizzaReducer, // 👈 Be sure to replace this, too!
  }),
  applyMiddleware(logger)
);

export default store;
