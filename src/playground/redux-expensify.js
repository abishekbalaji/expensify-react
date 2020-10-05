




store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "Macbook Pro", amount: 2000, createdAt: -5000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Iphone 12", amount: 1000, createdAt: -1000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 1200 }));

store.dispatch(setTextFilter("o"));

store.dispatch(setTextFilter());

store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));

// store.dispatch(setStartDate());

// store.dispatch(setEndDate(200));

// store.dispatch(setEndDate());

// console.log(expenseOne, expenseTwo);
const demoState = {
  expenses: [
    {
      id: "ehfwihfwihiw",
      description: "Macbook Pro",
      note: "Macbook pro for its performance",
      amount: 1000,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined,
  },
};

const user = {
  name: "Abishek",
  age: 22,
};

console.log({
  ...user,
  location: "Pallet Town",
  age: 10,
});
