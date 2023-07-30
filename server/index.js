import express from "express";
import mysql from "mysql2";

const app = express();

const PORT = 5000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "PIyusH@123",
  database: "test",
});

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

app.listen(PORT, () =>
  console.log(`Connected to server: http://localhost:${PORT}`)
);