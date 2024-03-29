import React, { useState } from 'react';
import './AddExpenseForm.css'

const AddExpenseForm = ({ dispatch }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !category) {
      alert('Remplissez les 3 champs!');
      return;
    }

    dispatch({ type: 'add_expense', payload: { title, amount, category } }); // Modifié ici
    setTitle('');
    setAmount('');
    setCategory('');
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
            type="text"
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
            <option value="">Sélectionner une catégorie</option>
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
      </form>
    </div>
  );
};

export default AddExpenseForm;
