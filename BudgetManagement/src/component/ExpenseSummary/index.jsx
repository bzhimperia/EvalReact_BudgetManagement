import React from 'react';
import './ExpenseSummary.css';

const ExpenseSummary = ({ expenses, selectedCategory }) => {
  let totalExpenses;

  if (selectedCategory === "") {
    totalExpenses = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
  } else {
    totalExpenses = expenses
      .filter(expense => expense.category === selectedCategory)
      .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
  }
  
  return (
    <div className="expense-summary">
      <h2>Résumé des Dépenses</h2>
      {selectedCategory === "" ? (
        <p>Total des Dépenses pour toutes les catégories: <span className="total">{totalExpenses}€</span></p>
      ) : (
        <p>Total des Dépenses pour la catégorie {selectedCategory}: <span className="total">{totalExpenses}€</span></p>
      )}
    </div>
  );
};

export default ExpenseSummary;