import React, { useState } from 'react';

const AddExpenseForm = ({ dispatch }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !category) {
      alert('Veuillez remplir tous les champs!');
      return;
    }
    const expense = {
      title,
      amount: parseFloat(amount),
      category,
    };
    dispatch({ type: 'add_expense', payload: { title, amount, category } }); // Modifié ici
    setTitle('');
    setAmount('');
    setCategory('');
  };

  return (
    <div>
      <h2>Ajouter une Dépense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Montant"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Sélectionner une catégorie</option>
          <option value="Alimentation">Alimentation</option>
          <option value="Logement">Logement</option>
          <option value="Transport">Transport</option>
          <option value="Divertissement">Divertissement</option>
          <option value="Santé">Santé</option>
          <option value="Éducation">Éducation</option>
          <option value="Autres">Autres</option>
        </select>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddExpenseForm;