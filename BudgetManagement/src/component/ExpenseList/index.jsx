import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h2>Liste des Dépenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <div>{expense.title}</div>
            <div>{expense.amount}</div>
            <div>{expense.category}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;