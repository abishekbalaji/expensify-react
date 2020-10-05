import React from "react";
import ReactDOM from "react-dom";

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

store.dispatch(addExpense({ description: "Macbook Pro", amount: 1200 }));

store.dispatch(addExpense({ description: "Iphone 12", amount: 1000 }));

// store.dispatch(setTextFilter("oxz"));

// store.dispatch(setTextFilter("mac"));

store.dispatch(setTextFilter("o"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById("app"));
