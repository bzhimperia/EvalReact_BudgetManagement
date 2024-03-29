import React, { useState } from 'react';


const CategorieFilter = ({ categories, onCategoryChange }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        onCategoryChange(category);
    };

    return (
        <div>
            <label htmlFor={'filtre'}>Filtres : </label>
            <select value={selectedCategory} id={'filtre'} onChange={handleCategoryChange}>
                <option value="">Toutes les catégories</option>
                {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
        </div>
    );
};

export default CategorieFilter;