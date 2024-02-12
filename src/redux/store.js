import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const pizzaListReducer = (state = [], action) => {
  if (action.type === 'SET_PIZZA_LIST') {
    return action.payload;
  }

  return state;
};

const store = createStore(
  combineReducers({
    pizzaListReducer, // 👈 Be sure to replace this, too!
  }),
  applyMiddleware(logger)
);

export default store;
