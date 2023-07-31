import React, { useState } from "react";
import { addBook } from "../api";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [inputBook, setInputBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputBook((book) => ({ ...book, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await addBook(inputBook);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="Title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="Description"
        onChange={handleChange}
        name="desc"
      />
      <input
        type="number"
        placeholder="Price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="Cover"
        onChange={handleChange}
        name="cover"
      />
      <button className="formbutton" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default Add;
