import logo from './logo.svg';
import './App.css';


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import SearchBar from './components/SearchBar';
import FilterButtons from './components/FilterButtons';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const updateRecipe = (updatedRecipe) => {
    setRecipes(recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe));
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  const filteredRecipes = recipes
    .filter(recipe => filter ? recipe.type === filter : true)
    .filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="App">
      <h1>Libro de Recetas</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <FilterButtons setFilter={setFilter} />
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={filteredRecipes} updateRecipe={updateRecipe} deleteRecipe={deleteRecipe} />
    </div>
  );
};

export default App;

