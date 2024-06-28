import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes, updateRecipe, deleteRecipe }) => {
  return (
    <div>
      {recipes.map(recipe => (
        <RecipeItem key={recipe.id} recipe={recipe} updateRecipe={updateRecipe} deleteRecipe={deleteRecipe} />
      ))}
    </div>
  );
};

export default RecipeList;
