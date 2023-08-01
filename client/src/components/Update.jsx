import React, { useState, useEffect } from "react";
import { getBook, updateBook } from "../api";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [inputBook, setInputBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setInputBook((prevBookData) => ({
      ...prevBookData,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const bookData = (await getBook(bookId)).data;
        setInputBook(bookData[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBookData();
  }, [bookId]);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await updateBook(bookId, inputBook);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h1>Update Book</h1>
      {inputBook ? (
        <>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={inputBook.title}
            onChange={handleChange}
          />
          <textarea
            type="text"
            placeholder="Description"
            name="desc"
            rows={4}
            value={inputBook.desc}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Price"
            name="price"
            value={inputBook.price}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Cover"
            name="cover"
            value={inputBook.cover}
            onChange={handleChange}
          />
          <button className="formButton" onClick={handleClick}>
            Update
          </button>
        </>
      ) : (
        <p>Loading.....</p>
      )}
    </div>
  );
};

export default Update;
