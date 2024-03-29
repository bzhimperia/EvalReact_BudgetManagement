import React from 'react';

const ExpenseSummary = ({ expenses }) => {
  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div>
      <h2>Résumé des Dépenses</h2>
      <p>Total des Dépenses: {totalExpenses}</p>
    </div>
  );
};

export default ExpenseSummary;