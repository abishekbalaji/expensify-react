import React from "react";
import { connect } from "react-redux";

import selectExpenses from "../selectors/expenses";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = (props) => (
  <div>
    {props.expenses.length === 0 ? <p>No expenses</p> : <h1>Expense List</h1>}
    {props.expenses.map((expense, index) => (
      <ExpenseListItem {...expense} key={expense.id} />
    ))}
  </div>
);

// this will run every time the store changes
const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);
