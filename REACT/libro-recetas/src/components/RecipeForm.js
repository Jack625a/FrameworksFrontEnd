import React, { useState } from 'react';

const RecipeForm = ({ addRecipe }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(),
      name,
      ingredients,
      steps,
      type,
    };
    addRecipe(newRecipe);
    setName('');
    setIngredients('');
    setSteps('');
    setType('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nombre de la receta" required />
      <textarea value={ingredients} onChange={e => setIngredients(e.target.value)} placeholder="Ingredientes" required />
      <textarea value={steps} onChange={e => setSteps(e.target.value)} placeholder="Pasos de preparación" required />
      <select value={type} onChange={e => setType(e.target.value)} required>
        <option value="">Tipo de comida</option>
        <option value="desayuno">Desayuno</option>
        <option value="almuerzo">Almuerzo</option>
        <option value="cena">Cena</option>
        <option value="postre">Postre</option>
      </select>
      <button type="submit">Agregar receta</button>
    </form>
  );
};

export default RecipeForm;
