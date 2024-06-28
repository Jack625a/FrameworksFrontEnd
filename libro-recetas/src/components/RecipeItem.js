import React, { useState } from 'react';

const RecipeItem = ({ recipe, updateRecipe, deleteRecipe }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedRecipe, setUpdatedRecipe] = useState(recipe);

  const handleUpdate = () => {
    updateRecipe(updatedRecipe);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={updatedRecipe.name} onChange={e => setUpdatedRecipe({ ...updatedRecipe, name: e.target.value })} />
          <textarea value={updatedRecipe.ingredients} onChange={e => setUpdatedRecipe({ ...updatedRecipe, ingredients: e.target.value })} />
          <textarea value={updatedRecipe.steps} onChange={e => setUpdatedRecipe({ ...updatedRecipe, steps: e.target.value })} />
          <button onClick={handleUpdate}>Guardar</button>
        </div>
      ) : (
        <div>
          <h2>{recipe.name}</h2>
          <p>{recipe.ingredients}</p>
          <p>{recipe.steps}</p>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={() => deleteRecipe(recipe.id)}>Eliminar</button>
        </div>
      )}
    </div>
  );
};

export default RecipeItem;
