import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "test",
});

export const bookCreate = (req, res) => {
  res.send("Welcome to server side!!");
};

export const getBooks = (req, res) => {
  const que = "SELECT * FROM books";
  db.query(que, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const getSingleBook = (req, res) => {
  const { id } = req.params;

  const que = "SELECT * FROM books WHERE id = ?";

  db.query(que, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const creatingBook = (req, res) => {
  const que =
    "INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?)";
  const { title, desc, price, cover } = req.body;
  const values = [title, desc, price, cover];

  db.query(que, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const deletingBook = (req, res) => {
  const { id } = req.params;
  const que = "DELETE FROM books WHERE id = ?";

  db.query(que, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const updatingBook = (req, res) => {
  const { id } = req.params;
  const { title, desc, price, cover } = req.body;
  const que =
    "UPDATE books SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? WHERE id = ?";

  const values = [title, desc, price, cover];

  db.query(que, [...values, id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};
