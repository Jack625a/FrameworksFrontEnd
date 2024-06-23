import React, { useState } from 'react';

const Book = ({ book, deleteBook, updateBook }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBook, setEditedBook] = useState({ ...book });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedBook({ ...editedBook, [name]: value });
  };

  const handleUpdate = () => {
    updateBook(book.id, editedBook);
    setIsEditing(false);
  };

  return (
    <div className="book">
      {isEditing ? (
        <div className="edit-form">
          <input type="text" name="title" value={editedBook.title} onChange={handleEditChange} />
          <input type="text" name="author" value={editedBook.author} onChange={handleEditChange} />
          <input type="text" name="genre" value={editedBook.genre} onChange={handleEditChange} />
          <button onClick={handleUpdate}>Guardar</button>
        </div>
      ) : (
        <div className="book-details">
          <img src={book.image || '/default-book.jpg'} alt={book.title} className="book-image" />
          <h2>{book.title}</h2>
          <p>Autor: {book.author}</p>
          <p>Género: {book.genre}</p>
          <button onClick={() => deleteBook(book.id)} className="delete-button">Eliminar</button>
          <button onClick={() => setIsEditing(true)} className="edit-button">Editar</button>
        </div>
      )}
    </div>
  );
};

export default Book;
