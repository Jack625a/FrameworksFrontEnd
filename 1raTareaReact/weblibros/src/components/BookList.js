import React from 'react';
import Book from './Book';

const BookList = ({ books, deleteBook, updateBook }) => {
  return (
    <div className="book-list">
      {books.map(book => (
        <Book key={book.id} book={book} deleteBook={deleteBook} updateBook={updateBook} />
      ))}
    </div>
  );
};

export default BookList;
