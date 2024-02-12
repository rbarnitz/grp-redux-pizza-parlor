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
  if (action.type === 'ADD_TO_CART') {
    return [...state, action.payload];
  }
  return state;
};

const store = createStore(
  combineReducers({
    pizzaListReducer,
    addPizzaReducer, // 👈 Be sure to replace this, too!
  }),
  applyMiddleware(logger)
);

export default store;
