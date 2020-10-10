import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import moment from "moment";

import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

import "./styles/styles.scss";
import "normalize.css/normalize.css";

const store = configureStore();

// store.subscribe(() => {
//   const state = store.getState();
//   console.log(getVisibleExpenses(state.expenses, state.filters));
// });

store.dispatch(
  addExpense({
    description: "Macbook Pro",
    amount: 1200,
    createdAt: 1602333902,
  })
);

store.dispatch(addExpense({ description: "Iphone 12", amount: 1000 }));

store.dispatch(
  addExpense({ description: "Ipad Pro", amount: 900, createdAt: 1602333901 })
);

console.log(moment().format("X"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
