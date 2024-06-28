import React, { useState } from 'react';
import BookList from './componentes/BookList';
import BookForm from './componentes/BookForm';
import GenreFilter from './componentes/GenreFilter';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [editingBook, setEditingBook] = useState(null);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const editBook = (updatedBook) => {
    setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
  };

  const deleteBook = (id) => {
    if (window.confirm('Esta seguro que quiere eliminar el libro?')) {
      setBooks(books.filter(book => book.id !== id));
    }
  };

  const filteredBooks = filter === 'All' ? books : books.filter(book => book.genre === filter);

  return (
    <div className="app">
      <h1>Catalago de Libros</h1>
      <GenreFilter setFilter={setFilter} />
      <BookList books={filteredBooks} onEdit={setEditingBook} onDelete={deleteBook} />
      <BookForm addBook={addBook} editBook={editBook} editingBook={editingBook} setEditingBook={setEditingBook} />
    </div>
  );
};

export default App;

