import React, { useState, useEffect } from "react";
import { deleteBook, getAllBooks } from "../api";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await getAllBooks();
        setBooks(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Book Shop</h1>
      <Link to="/add">
        <button className="addBookButton">Add new book</button>
      </Link>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt={book.title} />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>₹ {book.price}</span>
            <button className="delete" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <Link to={`/update/${book.id}`}>
              <button className="update">Update</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
