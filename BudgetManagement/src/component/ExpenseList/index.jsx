import React from 'react';
import "./ExpenseList.css";

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <ul>
      <div className='expendtitle expend'> <span>titre </span>   <span>montant</span>    <span>categorie</span></div>
        {expenses.map((expense, index) => (
          <li key={index}>
            <div className='expend'> <span>{expense.title} </span>   <span>{expense.amount.toFixed(2)}€</span>    <span>{expense.category}</span></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;