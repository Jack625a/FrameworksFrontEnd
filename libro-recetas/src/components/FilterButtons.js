import React from 'react';

const FilterButtons = ({ setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter('')}>Todos</button>
      <button onClick={() => setFilter('desayuno')}>Desayuno</button>
      <button onClick={() => setFilter('almuerzo')}>Almuerzo</button>
      <button onClick={() => setFilter('cena')}>Cena</button>
      <button onClick={() => setFilter('postre')}>Postre</button>
    </div>
  );
};

export default FilterButtons;
