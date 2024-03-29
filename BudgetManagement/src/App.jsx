import React from 'react';
import './App.css';
import AddExpenseForm from './component/AddExpenseForm/index.jsx';
import ExpenseList from './component/ExpenseList/index.jsx';
import ExpenseSummary from './component/ExpenseSummary/index.jsx';
import expenseReducer from './reducer/expenseReducer';
import { useReducer } from 'react';

function App() {
  const [state, dispatch] = useReducer(expenseReducer, { expenses: [], filter: "" });

  return (
    <div className="App">
      <h1>Gestion de Dépenses Personnelles</h1>
      <AddExpenseForm dispatch={dispatch} />
      <ExpenseSummary expenses={state.expenses} />
      <ExpenseList expenses={state.expenses} />
    </div>
  );
}

export default App;