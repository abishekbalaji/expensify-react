import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";

import selectExpensesTotal from "../selectors/selectExpensesTotal";

const ExpensesSummary = (props) => (
  <div>
    {props.expenses.total ? (
      <p>
        You have {props.expenses.size} expense(s) totaling{" "}
        {numeral(props.expenses.total / 100).format("$0,0.00")}
      </p>
    ) : (
      <p>You have 0 expenses</p>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  expenses: selectExpensesTotal(state.expenses),
});

export default connect(mapStateToProps)(ExpensesSummary);
