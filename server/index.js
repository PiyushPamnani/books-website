import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

const PORT = 5000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "PIyusH@123",
  database: "test",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to server side!!");
});

app.get("/books", (req, res) => {
  const que = "SELECT * FROM books";
  db.query(que, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/books/:id", (req, res) => {
  const { id } = req.params;

  const que = "SELECT * FROM books WHERE id = ?";

  db.query(que, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const que =
    "INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?)";
  const { title, desc, price, cover } = req.body;
  const values = [title, desc, price, cover];

  db.query(que, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const que = "DELETE FROM books WHERE id = ?";

  db.query(que, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const { title, desc, price, cover } = req.body;
  const que =
    "UPDATE books SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? WHERE id = ?";

  const values = [title, desc, price, cover];

  db.query(que, [...values, id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(PORT, () =>
  console.log(`Connected to server: http://localhost:${PORT}`)
);
