import React from 'react';
import "./ExpenseList.css";

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h2>Liste des Dépenses</h2>
      <ul>
      <div className='expendtitle expend'> <span>title </span>   <span>amount</span>    <span>category</span></div>
        {expenses.map((expense, index) => (
          <li key={index}>
            <div className='expend'> <span>{expense.title} </span>   <span>{expense.amount}</span>    <span>{expense.category}</span></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;