import React, { useState } from 'react';

const AddBookForm = ({ addBook }) => {
  const [newBook, setNewBook] = useState({ title: '', author: '', genre: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBook.title && newBook.author && newBook.genre) {
      addBook(newBook);
      setNewBook({ title: '', author: '', genre: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Título" value={newBook.title} onChange={handleChange} />
      <input type="text" name="author" placeholder="Autor" value={newBook.author} onChange={handleChange} />
      <input type="text" name="genre" placeholder="Género" value={newBook.genre} onChange={handleChange} />
      <button type="submit">Añadir Libro</button>
    </form>
  );
};

export default AddBookForm;
