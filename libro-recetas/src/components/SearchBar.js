import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <input type="text" placeholder="Buscar receta" onChange={e => setSearchTerm(e.target.value)} />
  );
};

export default SearchBar;
