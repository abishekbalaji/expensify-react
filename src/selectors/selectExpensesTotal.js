export default (expenses) => {
  let total = expenses
    .map((expense) => expense.amount)
    .reduce((sum, value) => sum + value, 0);
  const size = expenses.length;
  return { total, size };
};
