import React, { useState } from 'react';
import './AddExpenseForm.css'

const AddExpenseForm = ({ dispatch }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!title || !amount || !category) {
        throw new Error('Veuillez remplir tous les champs!');
      }

      const amountValue = parseFloat(amount);
      const decimalPart = amountValue.toString().split('.')[1];
      if (decimalPart && decimalPart.length > 2) {
        throw new Error('Le montant ne peut pas avoir plus de deux chiffres après la virgule.');
      }

      const expense = {
        title,
        amount: amountValue,
        category,
      };
      dispatch({ type: 'add_expense', payload: expense });
      setTitle('');
      setAmount('');
      setCategory('');
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Ajouter une Dépense</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            id="title"
            placeholder="Titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Montant (max 2 décimales)</label>
          <input
            type="number"
            id="amount"
            placeholder="Montant"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <span>€</span>
        </div>
        <div className="form-group">
          <label htmlFor="category">Catégorie</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option disabled={true} value="">Sélectionner une catégorie</option>
            <option value="Alimentation">Alimentation</option>
            <option value="Logement">Logement</option>
            <option value="Transport">Transport</option>
            <option value="Divertissement">Divertissement</option>
            <option value="Santé">Santé</option>
            <option value="Éducation">Éducation</option>
            <option value="Autres">Autres</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit">Ajouter</button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default AddExpenseForm;
