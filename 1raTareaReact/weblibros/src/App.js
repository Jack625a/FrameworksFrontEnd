import React, { useState } from 'react';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Libro 1', author: 'Autor 1', genre: 'Ficción' },
    { id: 2, title: 'Libro 2', author: 'Autor 2', genre: 'No ficción' },
    // Más libros...
  ]);

  const [filterGenre, setFilterGenre] = useState('Todos');

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: Date.now() }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const updateBook = (id, updatedBook) => {
    setBooks(books.map(book => (book.id === id ? updatedBook : book)));
  };

  const filteredBooks = filterGenre === 'Todos' ? books : books.filter(book => book.genre === filterGenre);

  return (
    <div className="app">
      <h1>Catálogo de Libros</h1>
      <AddBookForm addBook={addBook} />
      <div className="filter-buttons">
        <button onClick={() => setFilterGenre('Todos')}>Todos</button>
        <button onClick={() => setFilterGenre('Ficción')}>Ficción</button>
        <button onClick={() => setFilterGenre('No ficción')}>No ficción</button>
        {/* Agregar más géneros según necesidad */}
      </div>
      <BookList books={filteredBooks} deleteBook={deleteBook} updateBook={updateBook} />
    </div>
  );
};

export default App;
