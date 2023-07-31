import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const getAllBooks = () => API.get(`/books`);
export const getBook = (id) => API.get(`/books/${id}`);
export const addBook = (book) => API.post(`/books`, book);
export const deleteBook = (id) => API.delete(`/books/${id}`);
export const updateBook = (id, book) => API.put(`/books/${id}`, book);
