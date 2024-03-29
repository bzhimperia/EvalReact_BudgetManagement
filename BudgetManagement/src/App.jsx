import React, { useState }  from 'react';
import './App.css';
import AddExpenseForm from './component/AddExpenseForm/index.jsx';
import ExpenseList from './component/ExpenseList/index.jsx';
import ExpenseSummary from './component/ExpenseSummary/index.jsx';
import { expenseReducer, initialState } from './reducer/expenseReducer'; // Importez le reducer directement
import { useReducer } from 'react';
import CategorieFilter from './component/CategorieFilter/index.jsx';

function App() {
  const [state, dispatch] = useReducer(expenseReducer, initialState);
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['Alimentation', 'Logement', 'Transport', 'Divertissement', 'Santé', 'Éducation', 'Autres'];

  const handleCategoryChange = (category) => {
      setSelectedCategory(category);
      dispatch({ type: 'set_filter', payload: category }); // Envoyer l'action pour modifier la catégorie filtrée
  };

  const filteredExpenses = state.expenses.filter(expense => {
      return selectedCategory ? expense.category === selectedCategory : true;
  });
  return (
    <div className="App">
        <h1>Gestion de Dépenses Personnelles</h1>
        <AddExpenseForm dispatch={dispatch} />
        <ExpenseSummary expenses={filteredExpenses} />
        <ExpenseList expenses={filteredExpenses} />
        <CategorieFilter categories={categories} onCategoryChange={handleCategoryChange} />
    </div>
);
}

export default App;