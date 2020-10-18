import React from "react";


import ExpensesSummary from "./ExpensesSummary";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";


const ExpenseDashBoardPage = () => (
  <div>
    <h1>Dashboard</h1>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);


export default ExpenseDashBoardPage;
